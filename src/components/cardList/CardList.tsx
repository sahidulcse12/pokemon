import useCount from "@/Hooks/useCount";
import { useSets } from "@/Hooks/useSets";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import ShowCard from "./ShowCard";

const CardList = () => {
  const { cartIds } = useCount();
  const cardSets = useSets();
  const sets = cardSets.data;

  let findData: Set[] = [];
  cartIds.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  return (
    <>
      <div className="min-h-[750px]">
        <div className="grid grid-cols-3 p-20">
          {findData?.map((x, index) => (
            <ShowCard item={x} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
