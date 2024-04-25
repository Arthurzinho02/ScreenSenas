import { Tabs } from "expo-router";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import useColor from "../../temas/Temas";
import { TouchableOpacity } from "react-native";



export default function layout(){
    const color = useColor()
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false 
        }}>
            <Tabs.Screen name="scanner" options={{
                headerShown: true,
                tabBarIcon: ({color,size})=> (<FontAwesome6 name="camera-rotate" size={size} color={color} />),
                headerTintColor: "#FFFFFF",
                headerStyle: {
                    backgroundColor: "#FF0000"
                },
                tabBarStyle:{
                    backgroundColor: color.bgPrimary
                },
                headerRight: ()=>(<TouchableOpacity><FontAwesome6 style={{marginRight:10}} name="arrow-rotate-right" size={24} color='white'  /></TouchableOpacity>),
                 
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: color.bgSecundary,
                },
                tabBarIcon: ({color, size})=> (<MaterialIcons name="format-list-numbered" size={size} color={color} />),
                tabBarInactiveTintColor: "#FFFFFF",
            }}/>
        </Tabs>
    )
}