import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { Link } from "expo-router"
import { LinkProps } from "expo-router/build/link/Link"

interface LinkBtnProps extends LinkProps {
  nome: string
}

function Button({ nome, ...props }: LinkBtnProps) {
  return (
    <Link {...props} asChild >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.TextButton}>{nome}</Text>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 47,
    backgroundColor: '#101010',
    borderRadius: 5,
  },
  TextButton: {
    fontSize: 14,
    color: "#FFFFFF",
  },
})

export default Button