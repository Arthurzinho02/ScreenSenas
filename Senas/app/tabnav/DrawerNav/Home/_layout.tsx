import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function layout(){
    return(
        <Stack>
            <Stack.Screen name="inventario" options={{
                headerLeft: ()=> (<DrawerToggleButton/>),
                headerSearchBarOptions: {
                    placeholder: 'Pesquisar'
                }
            }}/>
        </Stack>
    )
}