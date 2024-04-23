import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';
import { Cores } from '../temas/Temas';

interface InputProps extends TextInputProps{
    label: string
    cor: Cores
}

export default function Input({label, ...props}: InputProps){
    const [hover, sethover] =useState(props.cor.inputbgPrimaryVariant)
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height: 59,
            gap: 9,
            
        },
        Texto:{
            color: props.cor.inputtextcolorPrimaryVariant,
            fontSize:14,
        },
        InputTex:{
            borderWidth: 1,
            borderColor: hover,
            height: 44,
            fontSize:11,
            borderRadius: 5,
            backgroundColor: props.cor.inputbgPrimaryVariant,
            padding:5,
        }
    })
    return(
        <>
            <Text style={styles.Texto}>{label}</Text>
            <TextInput {...props} style={styles.InputTex} placeholderTextColor={props.cor.inputtextcolorPrimaryVariant} onFocus={()=>{
                sethover(props.cor.inputbgHover)
            }} onBlur={()=>{
                sethover(props.cor.inputbgPrimaryVariant)
            }}/>
        </>
    )
}
