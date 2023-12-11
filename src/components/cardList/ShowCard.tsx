import useCount from "@/Hooks/useCount";
import Image from "next/image";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const ShowCard = ({ item }: { item: Set }) => {
  const { removeId, decrement } = useCount();
  return (
    <div className="grid grid-cols-3 mx-2 border-2 border-gray-400">
      <div className="flex justify-start items-center mx-10">
        <Image
          src={item.images.logo}
          alt={"images"}
          width={100}
          height={100}
          priority={true}
        />
        <div className="flex justify-center items-center m-10">
          <h2 className="text-xl mt-2">Name: {item?.name}</h2>
        </div>
        <div className="flex justify-end items-center m-10">
          <button
            className="text-white form-button clear w-10 bg-rose-600 p-2 transition rounded"
            type="button"
            onClick={() => {
              decrement();
              removeId(item.id);
            }}
          >
            &#9747;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
