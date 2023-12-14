import useCount, { useCartCount } from "@/Hooks/useCount";
import { useSets } from "@/Hooks/useSets";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import ShowCard from "./ShowCard";
import { useEffect, useState } from "react";
import { getItem, setItem } from "@/utilities/fakeDB";
import { StampedSet } from "@/types";

const CardList = () => {
  const { cartIds } = useCount();
  const cardSets = useSets();
  const sets = cardSets.data;

  let findData: Set[] = [];
  cartIds.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  const defaultState: { count: 0; items: StampedSet[] } = {
    count: 0,
    items: [],
  };
  const { random, setRandom } = useCartCount();
  const [cart, setCartCount] = useState<{ count: number; items: StampedSet[] }>(
    defaultState
  );

  useEffect(() => {
    let c = getItem("cart");
    if (!c) c = defaultState;
    setCartCount(c);
  }, [random]);

  return (
    <div className="min-h-[560px]">
      <div className="grid grid-cols-3 p-20">
        {cart.items?.map((x, index) => (
          <ShowCard item={x} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
