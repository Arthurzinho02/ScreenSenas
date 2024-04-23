import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Link } from "expo-router"
import { LinkProps } from "expo-router/build/link/Link"
import { Cores } from "../temas/Temas"

interface LinkBtnProps extends LinkProps {
  nome: string
  cor: Cores
}

export default function Button({ nome, ...props }: LinkBtnProps) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 47,
      backgroundColor: props.cor.nome === 'dark' ? props.cor.bgSecundary : '#000000',
      borderRadius: 5,
    },
    TextButton: {
      fontSize: 14,
      color: "#FFFFFF",
    },
  })
  return (
    <Link style={styles.container} {...props} asChild >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.TextButton }>{nome}</Text>
      </TouchableOpacity>
    </Link>
  )
}



