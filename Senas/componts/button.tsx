import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

function Button({nome}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.TextButton}>{nome}</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:10
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 47,
        backgroundColor:'#101010',
        borderRadius: 5,
      },
      TextButton:{
        fontSize: 14,
        color:"#FFFFFF",
      },
})

export default Button