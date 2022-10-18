import axios from 'axios';
import {useEffect, useState} from 'react';

type PokemonResponse = {
  abilities: Array<{
    ability: {
      name: string;
    };
    slot: number;
  }>;
  name: string;
};

export default function usePokemonInfo(
  pokemonName: string,
): [PokemonResponse | undefined, boolean] {
  const [pokemonData, setPokemonData] = useState<PokemonResponse>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLocaleLowerCase()}`,
        );

        setPokemonData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getPokemon();
  }, [pokemonName]);

  return [pokemonData, isLoading];
}
