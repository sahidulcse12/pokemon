import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

const CardInfo = ({ info }: { info: Partial<PokemonTCG.Set> }) => {
  const { name, updatedAt, releaseDate } = info;
  return (
    <>
      <div className="ml-3 mb-3 overflow-y-auto">
        <h2 className="text-xl mt-2">Name: {name}</h2>
        <h3>Release Date: {releaseDate}</h3>
        <h3>Updated At: {updatedAt}</h3>
      </div>
    </>
  );
};

export default CardInfo;
