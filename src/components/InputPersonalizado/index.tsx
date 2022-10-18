import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type InputProps = {
  nomeBotao?: string;
  placeholder: string;
  onConfirmText: (text: string) => void;
};

export default function Input({nomeBotao, onConfirmText, ...rest}: InputProps) {
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('montei o componente');
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    console.log('atualizei');
  }, [textInput]);

  return (
    <View style={{backgroundColor: '#550000'}}>
      {!isLoading && (
        <>
          <TextInput
            {...rest}
            onChangeText={(text: string) => setTextInput(text)}
          />
          <Text>{textInput}</Text>
        </>
      )}
      <TouchableOpacity
        style={{backgroundColor: '#005500'}}
        onPress={() => {
          onConfirmText(textInput);
        }}>
        <Text>{nomeBotao ? nomeBotao : 'Salvar'}</Text>
      </TouchableOpacity>
      {/* {usuario.enderecos.lenght > 0 ? <COMPONENTE PIPIPIP></> : undefined } */}
      {/* {usuario.enderecos && <Text>Passei o nomeBotao</Text>} */}
      {nomeBotao && <Text>Passei o nomeBotao</Text>}
    </View>
  );
}
