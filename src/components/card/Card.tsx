import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

const Card = (props: { item: PokemonTCG.Set }) => {
  const { images, ...info } = props.item;
  return (
    <>
      <div className=" bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <CardImage imageUrl={images} />
        <CardInfo info={info} />
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 mr-10 ml-3 px-4 rounded">
          view details
        </button>
      </div>
    </>
  );
};

export default Card;
