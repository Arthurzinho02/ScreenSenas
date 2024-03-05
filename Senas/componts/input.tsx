import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    label: string
}

function Input({label, ...props}: InputProps){
    return(
        <>
            <Text style={styles.Texto}>{label}</Text>
            <TextInput {...props} style={styles.InputTex} />
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