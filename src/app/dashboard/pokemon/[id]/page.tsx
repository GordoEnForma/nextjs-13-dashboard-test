interface Props {
  params: { id: string };
}

const getPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((res) => res.json());
  return response;
};

export default function PokemonPage({ params }: Props) {
  const { id } = params;
  return <div>Poke Page {id}</div>;
}
