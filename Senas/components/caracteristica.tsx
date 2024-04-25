import { StyleSheet, Text, View } from "react-native"
import { TextInputProps } from "react-native"
import { Cores } from "../temas/Temas"


interface DesProps extends TextInputProps{
    titulo: string,
    texto: string,
    cor: Cores
}

export default function Caracteristica({...props}:DesProps){
    const styles = StyleSheet.create({
        titulo:{
            color: props.cor.textcolorPrimary,
            fontWeight: '600',
            fontSize: 11,
            marginBottom: 10
        },Texto:{
            color: props.cor.inputtextcolorPrimaryVariant,
            fontSize: 16,
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