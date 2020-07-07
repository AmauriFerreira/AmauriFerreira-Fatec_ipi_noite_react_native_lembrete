
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ToastAndroid, Alert } from 'react-native';

import LembreteItem from './componets/LembreteItem';
import LembreteInput from './componets/LembreteInput';


export default function App() {

  
  const [lembretes, setLembretes] = useState([]);
  

  const [contadorLembretes, setContadorLembretes] = useState(0);

 

  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);
      return [{ key: contadorLembretes.toString(), value: lembrete }, ...lembretes];
    })
    console.log(lembrete);
  }

  const apagarLembretes = () => {
    setLembretes([]);
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida
       
      })
      
    })
  
    Alert.alert( "Lembrete Apagado!");
       
  }

  return (
    <View style={styles.telaPrincipalView}>

      <LembreteInput onAdicionarLembrete={adicionarLembrete} onApagarTudo={apagarLembretes} />

      <View>
        <FlatList
          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem
                chave={lembrete.item.key}
                lembrete={lembrete.item.value}
                onDelete={removerLembrete}  />
            )
          }
        />
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  itemNaLista: {
    padding: 16,
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 12,
    fontSize: 16,
    width: '80%',
    alignSelf: 'center'
  },
  
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  

});
