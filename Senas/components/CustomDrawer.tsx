import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";

export default function CustomDrawer(props:any){
    return(
        <View style={{marginTop: 60 }}>
            <View style={{padding:20, display: 'flex', flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'#D9D9D9'}}>
                <Image source={require('@assets/Perfil.png')}/>
                <View style={{display:'flex', justifyContent:'center', padding: 20}}>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Flavio Josefo</Text>
                    <Text style={{color: '#595959'}}>flavio@gmail.com</Text>
                </View> 
            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}