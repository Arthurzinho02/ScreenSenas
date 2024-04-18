import { Tabs } from "expo-router";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import useColor from "../../temas/Temas";
import { DrawerToggleButton } from "@react-navigation/drawer";

const color = useColor()

export default function layout(){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false 
        }}>
            <Tabs.Screen name="scanner" options={{
                headerShown: true,
                tabBarIcon: ({color, size})=> (<FontAwesome6 name="camera-rotate" size={size} color={color} />),
                headerTintColor: "#FFFFFF",
                headerStyle: {
                    backgroundColor: "#FF0000"
                },
                headerRight: ()=>(<FontAwesome6 style={{marginRight:10}} name="arrow-rotate-right" size={24} color="white"  />)
            }}/>
            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#ff0000',
                },
                tabBarIcon: ({color, size})=> (<MaterialIcons name="format-list-numbered" size={size} color={color} />),
                tabBarInactiveTintColor: "#fff",
            }}/>
        </Tabs>
    )
}