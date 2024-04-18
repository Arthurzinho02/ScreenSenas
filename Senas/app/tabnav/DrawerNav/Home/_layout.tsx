import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function layout(){
    return(
        <Stack>
            <Stack.Screen name="Lista" options={{
                headerTitleAlign: 'center',
                headerLeft: ()=> (<DrawerToggleButton/>),
                headerSearchBarOptions: {
                    placeholder: 'Pesquisar'
                }
            }}/>
            <Stack.Screen name="Editar" />
        </Stack>
    )
}