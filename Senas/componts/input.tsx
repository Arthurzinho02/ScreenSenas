import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps{
    label: string
}

export default function Input({label, ...props}: InputProps){
    const [hover, sethover] =useState('#F5F5F5')
    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height: 59,
            gap: 9,
            
        },
        Texto:{
            fontSize:14,
        },
        InputTex:{
            borderWidth: 1,
            borderColor: hover,
            height: 44,
            fontSize:11,
            borderRadius: 5,
            backgroundColor: '#F5F5F5',
            padding:5
            
        }
    })
    return(
        <>
            <Text style={styles.Texto}>{label}</Text>
            <TextInput {...props} style={styles.InputTex} onFocus={()=>{
                sethover('#F39200')
            }} onBlur={()=>{
                sethover('#F5F5F5')
            }}/>
        </>
    )
}
