import { View, StyleSheet, TouchableOpacity } from "react-native"


function Footer({...props}) {
    return (
        <View style={[styles.container, { backgroundColor: props.cor, borderTopWidth: props.bw, borderColor: props.bcolor }]}>
            <TouchableOpacity>
                {props.ionicons}
            </TouchableOpacity>
            <TouchableOpacity>
                {props.ionicons1}
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        height: 60,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
})

export default Footer