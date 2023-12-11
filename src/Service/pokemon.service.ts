import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const getCardData = async () => {
  const data = await PokemonTCG.getAllSets();
  return data;
};

export const getSetData = async (setId: string) => {
  const set = await PokemonTCG.findSetByID(setId);
  return set;
};

export const editSetName = async (setId: string, setName: string) => {
  return {
    message: "Name Edited Successfully",
  };
};
