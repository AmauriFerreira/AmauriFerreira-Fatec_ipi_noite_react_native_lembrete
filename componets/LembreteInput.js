

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');

    return (
        <View style={estilos.lembreteView}>
           
            <TextInput
                placeholder="Nome do contato..."
                style={estilos.lembreteTextInput1}
                onChangeText={(t) => setLembrete(t)}
                value={lembrete}
            />

        
            <View
                style={estilos.botao}>
                <Button
                    title="Adicionar lembrete"
                    onPress={() => props.onAdicionarLembrete(lembrete)}
                />
               
            </View>
            <View
                style={estilos.botao}>
                <Button
                    title="Apagar tudo"
                    onPress={() => { props.onApagarTudo() }} />
            </View>
        </View>
    );
  
}

const estilos = StyleSheet.create({
    lembreteTextInput1: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginVertical: '2%',
        padding: 2,
        
    },
    lembreteTextInput2: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        
       
    },

    lembreteView: {
        marginBottom: 8,
        alignItems: 'center'

    },
    botao: {
        width: '100%',
        marginTop: 8
    }
});

export default LembreteInput;