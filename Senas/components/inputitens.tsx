import { View,Text, TextInput, StyleSheet } from "react-native"
import { useState } from "react"
import { Cores } from "../temas/Temas"
import { TextInputProps } from "react-native"

interface Inputprops extends TextInputProps {
    label: string
    cor: Cores
}

export default function InputI({label, ...props}:Inputprops){
    const [hover, sethover] =useState(props.cor.inputtextcolorPrimaryVariant)
    const styles = StyleSheet.create({
        container:{
            position: 'absolute',
            fontSize: 11,
            backgroundColor: props.cor.bgPrimary,
            fontWeight: '600',
            zIndex: 1,
            color: hover,
            marginLeft: 10,
            paddingLeft: 5
            
        },
        input:{
            marginTop:10,
            height: 50,
            borderRadius:5,
            borderWidth: 1,
            borderColor: hover,
            justifyContent: 'center',
            paddingLeft: 10,
            marginBottom: 20
        },
        ponto:{
            color:'#FF0000'
        },

    })
    return(
        <>
            <View>
                <Text style={styles.container}>
                    {label} <Text style={styles.ponto}>*</Text> 
                </Text>
            </View>
            <TextInput style={styles.input} onFocus={()=>{
                sethover(props.cor.inputbgHover)
            }} onBlur={()=>{
                sethover(props.cor.inputtextcolorPrimaryVariant)
            }}/>
        </>

    )
}


