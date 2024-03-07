import { View,Text, TextInput, StyleSheet } from "react-native"
import { useState } from "react"

type Inputprops = {
    label: string
}

export default function InputI({label}:Inputprops){
    const [hover, sethover] =useState('#5D5C5C')
    const styles = StyleSheet.create({
        container:{
            position: 'absolute',
            fontSize: 11,
            backgroundColor: '#FFFFFF',
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
                sethover('#F39200')
            }} onBlur={()=>{
                sethover('#5D5C5C')
            }}/>
        </>

    )
}


