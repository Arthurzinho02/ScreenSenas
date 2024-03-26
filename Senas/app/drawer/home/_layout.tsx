import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

export default function layout(){
    return <Tabs screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: ()=>(
            <DrawerToggleButton/>
        ),
        headerRight: ()=> (
            ScreenStackHeaderSearchBarView ({
                placeholder:"Pesquisar"
            })
        )
    }}>

    </Tabs>
}