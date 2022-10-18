/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Label from './src/components/Label';
import Input from './src/components/InputPersonalizado';
import PokeInfo from './src/components/PokeInfo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = useState('ninguém');

  return (
    <SafeAreaView style={backgroundStyle}>
      <Label nome={text} />
      <Input
        placeholder="Seu nome"
        nomeBotao="toque aqui para confirmar o texto"
        onConfirmText={(confirmText: string) => {
          setText(confirmText);
        }}
      />
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView> */}
      <PokeInfo pokeName="Pikachu" />
    </SafeAreaView>
  );
};

export default App;
