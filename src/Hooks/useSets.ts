import { QueryKeys } from "@/Enums";
import { getCardData, getSetData } from "@/Service/pokemon.service";
import { useQuery } from "@tanstack/react-query";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";

export const useSets = () => {
  return useQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getAllSets();
      return sets;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};

export const useSet = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.CardSet],
    queryFn: async () => {
      const singleCard = await getSetData(id);
      return singleCard;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};
