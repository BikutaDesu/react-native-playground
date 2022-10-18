import styled from 'styled-components/native';

const theme = {
  spacing: {
    md: 16,
  },
};

export const PokemonDataWrapper = styled.View`
  margin-top: ${theme.spacing.md}px;
  padding-horizontal: ${theme.spacing.md}px;
`;

type PokemonNameProps = {
  pokeName: string;
};

export const PokemonName = styled.Text<PokemonNameProps>`
  font-size: 24px;
  background-color: ${props =>
    props.pokeName === 'pikachu' ? 'yellow' : 'green'};
  color: ${props => (props.pokeName === 'pikachu' ? 'black' : 'white')};
`;

export const AbilitiesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
