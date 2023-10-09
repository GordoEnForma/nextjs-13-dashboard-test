"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons));
  return (
    <div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};
