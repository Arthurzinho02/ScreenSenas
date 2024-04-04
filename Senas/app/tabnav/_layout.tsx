import { Tabs } from "expo-router";
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function layout(){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false 
        }}>
            <Tabs.Screen name="scanner" options={{
                headerShown: false,
                tabBarIcon: ({color, size})=> (<FontAwesome6 name="camera-rotate" size={size} color={color} />)
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