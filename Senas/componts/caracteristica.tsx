import { StyleSheet, Text, View } from "react-native"

export default function Caracteristica({...props}){
    const styles = StyleSheet.create({
        titulo:{
            fontWeight: '600',
            fontSize: 11,
            marginBottom: 10
        },Texto:{
            fontSize: 16,
            color: '#595959',
            fontWeight: '400'
        }
    })
    return(
        <View>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.Texto}>{props.texto}</Text>
        </View>
    )
}