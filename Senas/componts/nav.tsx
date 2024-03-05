import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

function Nav({...props}){
    return(
        <View style={[styles.container, { backgroundColor: props.cor }]}>
            <TouchableOpacity>
                {props.ionicons}
            </TouchableOpacity>
            <Text style={[styles.text, {color: props.corText}]}>{props.text}</Text>
            <TouchableOpacity>
                {props.ionicons1}
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 20,
        paddingBottom: 0
    },
    text:{
        fontSize: 14,
        fontWeight: '600'
    }
})
export default Nav