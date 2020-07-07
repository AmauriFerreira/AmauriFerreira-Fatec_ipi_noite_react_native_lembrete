
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback,TouchableOpacity, Button, ToastAndroid,map} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { render } from 'react-dom';




const LembreteItem = (props)=> { 

 
      
   
    return (
        <TouchableNativeFeedback>

        <TouchableOpacity>
      
    <View style={estilos.itemNaLista}>
    <Text style={{fontSize:18, color:"#EEE", marginTop: 7}}>Nome: {props.lembrete}</Text>
   
      
       <Icon.Button 
       name="trash" 
       size={30} 
       color="#EEE" 
       backgroundColor="transparent"   
       onPress={() => console.log(props.onDelete(props.chave))}>
       </Icon.Button>

         </View>

        </TouchableOpacity>  

        </TouchableNativeFeedback>
        

    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
       // fontSize: 20,
        padding: 12,
        backgroundColor: '#b966ff',
        borderBottomColor: '#3f3160',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

});

export default LembreteItem;