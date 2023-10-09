import { Metadata } from "next";
import { FavoritePokemons} from "@/pokemons";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default async function PokemonsPage() {
  // console.log(pokemons);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small>Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
