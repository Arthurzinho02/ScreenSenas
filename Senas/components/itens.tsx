import { Link } from "expo-router"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Cores } from "../temas/Temas"
import { LinkProps } from "expo-router/build/link/Link"

interface InputBtnProps extends LinkProps {
    codigo: string,
    texto: string,
    cor: Cores
  }

export default function Itens({codigo, texto,...props}:InputBtnProps){

    const styles = StyleSheet.create({
    container:{
        backgroundColor: props.cor.bgPrimary,
        borderWidth: 1,
        borderColor: props.cor.nome == 'dark' ? props.cor.inputbgPrimaryVariant: '#F5F5F5',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        gap: 10
    },
    numero:{
        color: props.cor.textcolorPrimary,
        fontSize: 16,
        fontWeight: '600'
    },Tex:{
        color: props.cor.inputtextcolorPrimaryVariant,
        fontSize: 14,
        fontWeight: '400'
    },
})
    return(
        <Link {...props} asChild>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.numero}>{codigo}</Text>
                <Text style={styles.Tex}>{texto}</Text>
            </TouchableOpacity>
        </Link>
    )
}

