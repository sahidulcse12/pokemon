import { QueryKeys } from "@/Enums";
import { editSetName } from "@/Service/pokemon.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const useUpdateSetName = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ setId, setName }: { setId: string; setName: string }) =>
      editSetName(setId, setName),
    onSuccess: (data, variables) => {
      console.log(variables);
      queryClient.setQueryData(
        [QueryKeys.CardSets],
        (initialSets: PokemonTCG.Set[]) => {
          let foundSet = initialSets?.find((set) => set.id === variables.setId);
          if (foundSet) {
            foundSet.name = variables.setName;
          }
          return initialSets;
        }
      );
      //queryClient.invalidateQueries({ queryKey: [QueryKeys.CardSets] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
