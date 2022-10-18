import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import usePokemonInfo from '../../hooks/usePokemonInfo';
import {AbilitiesWrapper, PokemonDataWrapper, PokemonName} from './styles';

type Props = {
  pokeName: string;
};

export default function PokeInfo({pokeName}: Props) {
  const [pokemonData, isLoading] = usePokemonInfo(pokeName);

  return (
    <View>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {!isLoading && pokemonData && (
        <PokemonDataWrapper>
          <View>
            <PokemonName pokeName={pokemonData.name}>
              Nome: {pokemonData.name}
            </PokemonName>
          </View>
          <View>
            <Text>Habilidades</Text>
            <AbilitiesWrapper>
              {pokemonData.abilities.map(currentAbility => (
                <View>
                  <Text>Nome: {currentAbility.ability.name}</Text>
                  <Text>Slot: {currentAbility.slot}</Text>
                </View>
              ))}
            </AbilitiesWrapper>
          </View>
        </PokemonDataWrapper>
      )}
    </View>
  );
}
