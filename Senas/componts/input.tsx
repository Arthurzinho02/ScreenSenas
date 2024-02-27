import { StyleSheet, Text, View, TextInput } from 'react-native';


function Input({nome, texto}){
    return(
        <>
            <Text style={styles.Texto}>{nome}</Text>
            <TextInput style={styles.InputTex} placeholder={texto}/>
        </>
    )
}
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
        height: 45,
        fontSize:11,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        padding:5
        
    }
})

export default Input