import useCount from "@/Hooks/useCount";
import { useSets } from "@/Hooks/useSets";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import ShowCard from "./ShowCard";

const CardList = () => {
  const { cartId } = useCount();
  const cardSets = useSets();
  const sets = cardSets.data;

  let findData: Set[] = [];
  cartId.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  return (
    <>
      {findData?.map((x, index) => (
        <ShowCard item={x} key={index} />
      ))}
    </>
  );
};

export default CardList;
