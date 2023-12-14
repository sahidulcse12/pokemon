import useCount, { useCartCount } from "@/Hooks/useCount";
import { StampedSet } from "@/types";
import { deleteItem, getItem, setItem } from "@/utilities/fakeDB";
import Image from "next/image";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";

const ShowCard = ({ item }: { item: StampedSet }) => {
  const { removeId, decrement } = useCount();
  const { random, setRandom } = useCartCount();
  const defaultState: { count: 0; items: StampedSet[] } = {
    count: 0,
    items: [],
  };
  const [cart, setCartCount] = useState<{ count: number; items: StampedSet[] }>(
    defaultState
  );

  useEffect(() => {
    let c = getItem("cart");
    if (!c) c = defaultState;
    setCartCount(c);
  }, [random]);

  const decCount = () => {
    let x = deleteItem("cart");
    const filteredItems = cart.items.filter(
      (i) => !(i.set.id === item.set.id && i.timeStamp === item.timeStamp)
    );
    const newCart = { count: cart.count - 1, items: [...filteredItems] };
    setItem("cart", JSON.stringify(newCart));
    setCartCount(newCart);
    setRandom();
  };

  return (
    <>
      <div className="grid grid-cols-3 mx-2 border-2 border-gray-400">
        <div className="flex justify-start items-center mx-10">
          <Image
            src={item.set.images.logo}
            alt={"images"}
            width={100}
            height={100}
            priority={true}
          />
          <div className="flex justify-center items-center m-10">
            <h2 className="text-xl mt-2">Name: {item?.set.name}</h2>
          </div>
          <div className="flex justify-end items-center m-10">
            <button
              className="text-white form-button clear w-10 bg-rose-600 p-2 transition rounded"
              type="button"
              onClick={() => {
                decrement();
                removeId(item.set.id);
                // decCart(item.id);
                decCount();
              }}
            >
              &#9747;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCard;
