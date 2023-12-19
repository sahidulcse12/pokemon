import { QueryKeys } from "@/Enums";
import { useSets } from "@/Hooks/useSets";
import { useUpdateSetName } from "@/Hooks/useUpdateSetName";
import { getCardData } from "@/Service/pokemon.service";
import Card from "@/components/card/Card";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<{ props: { dehydratedState: DehydratedState } }> => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 12 * 60 * 60 * 1000,
      },
    },
  });
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getCardData();
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const LoadCard = () => {
  const setsObject = useSets();
  const sets = setsObject.data;
  sets?.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate));

  return (
    <>
      <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
        {sets
          ? sets.map((item) => <Card item={item} key={item.id} />)
          : "Loading..."}
      </div>
    </>
  );
};

export default LoadCard;
