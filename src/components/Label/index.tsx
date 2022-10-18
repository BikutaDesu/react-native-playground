import React from 'react';
import {Text, View} from 'react-native';

type LabelProps = {
  nome?: string;
};

//const Button = (props: LabelProps) =>
const Label: React.FC<LabelProps> = ({nome}) => {
  return (
    <View>
      <Text>Olá {nome}</Text>
    </View>
  );
};

export default Label;
