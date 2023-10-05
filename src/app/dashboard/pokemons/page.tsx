import { Metadata } from "next";
import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export const metadata: Metadata = {
  title: "Listado de Pokemons",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = response.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  // throw new Error("El error de horrores");
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  // console.log(pokemons);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>Estáticos</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
