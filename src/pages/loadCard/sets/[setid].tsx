import { QueryKeys } from "@/Enums";
import { useSet } from "@/Hooks/useSets";
import { getCardData, getSetData } from "@/Service/pokemon.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await getAllSets();
  const tempPaths: { params: { setid: string } }[] = data.map((x) => {
    return { params: { setid: x.id } };
  });
  return {
    paths: tempPaths.splice(0, 5),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const queryClient = new QueryClient();
  const id = context.params?.setid as string;
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSet],
    queryFn: async () => {
      const singleData = await getSetData(id);
      return singleData;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};

const CardSet = () => {
  const router = useRouter();
  const id = router.query.setid as string;

  const setObjects = useSet(id);
  const set = setObjects.data;

  if (!set)
    return (
      <div className="h-[690px] flex justify-center items-center overflow-y-hidden bg-gray-300">
        <h3 className="text-center text-[60px]">No items found </h3>
      </div>
    );

  return (
    <div className="h-[690px] flex justify-center items-center overflow-hidden bg-gray-300">
      {set ? (
        <>
          <div className="flex bg-white rounded-xl shadow-xl shadow-black/50 p-20">
            <div className="mr-10">
              <div className="relative w-[300px] h-[250px] border-r-2 border-black">
                <Image
                  width={500}
                  height={500}
                  className="pr-10"
                  src={set.images?.logo}
                  alt={set.name + "images"}
                  priority={true}
                />
              </div>
            </div>
            <div className="ml-10 mt-10">
              <p>Name : {set.name}</p>
              <p>Release Date : {set.releaseDate}</p>
              <p>Series : {set.series}</p>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CardSet;
