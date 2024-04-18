import { Link } from "expo-router"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

function Itens({...props}){
    return(
        <Link href={props.link} asChild>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.numero}>{props.codigo}</Text>
                <Text style={styles.Tex}>{props.texto}</Text>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#F5F5F5',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        gap: 10
    },
    numero:{
        color:'#000000',
        fontSize: 16,
        fontWeight: '600'
    },Tex:{
        color: '#595959',
        fontSize: 14,
        fontWeight: '400'
    },
})
export default Itens