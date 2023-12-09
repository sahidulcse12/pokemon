import { QueryKeys } from "@/Enums";
import { getCardData, getSetData } from "@/Service/pokemon.service";
import { useQuery } from "@tanstack/react-query";

export const useSets = () => {
  return useQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await getCardData();
      return sets;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};

export const useSet = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const singleCard = await getSetData(id);
      return singleCard;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: true,
  });
};
