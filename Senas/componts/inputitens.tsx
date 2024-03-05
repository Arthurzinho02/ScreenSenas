import { View, Text, TextInput, StyleSheet } from "react-native"

function InputI({...props}){
    return(
        <>
            <Text style={styles.container}>{props.titulo} <Text style={styles.ponto}>*</Text> </Text>
            <View style={styles.input}>
                <TextInput/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        fontSize: 11,
        backgroundColor: '#FFFFFF',
        fontWeight: '600',
        zIndex: 1
    },
    input:{
        marginTop:10,
        height: 50,
        borderRadius:5,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#5D5C5C'
    },
    ponto:{
        color:'#FF0000'
    }
})

export default InputI