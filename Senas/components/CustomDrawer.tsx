import { DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import useColor from "../temas/Temas";

export default function CustomDrawer(props:any){
    const color = useColor()
    return(
        <View style={{paddingTop: 60, backgroundColor: color.bgPrimary, height: '100%' }}>
            <View style={{padding:20, display: 'flex', flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'#D9D9D9'}}>
                <Image source={require('@assets/Perfil.png')}/>
                <View style={{display:'flex', justifyContent:'center', padding: 20}}>
                    <Text style={{fontWeight: "bold", fontSize: 16, color: color.textcolorPrimary}}>Flavio Josefo</Text>
                    <Text style={{color: color.textcolorSecundary}}>flavio@gmail.com</Text>
                </View> 
            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}