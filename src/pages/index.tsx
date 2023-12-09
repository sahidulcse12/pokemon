import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSidePropsContext } from "next";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/Enums";
import { getCardData } from "@/Service/pokemon.service";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useSets } from "@/Hooks/useSets";
import Card from "@/components/card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { sets: PokemonTCG.Set[] }) {
  const setsObject = useSets();
  const sets = setsObject.data;
  // console.log("index", sets);
  // sort();
  return (
    <>
      <div className="py-20 gap-y-10 place-items-center grid grid-cols-3">
        {sets
          ? sets.map((item, index) => <Card item={item} key={index} />)
          : "Loading..."}
      </div>
    </>
  );
}
