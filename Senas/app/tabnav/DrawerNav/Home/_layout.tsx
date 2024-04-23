import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import useColor from "../../../../temas/Temas";

export default function layout(){
    const color = useColor()
    return(
        <Stack>
            <Stack.Screen name="Lista" options={{
                headerTintColor: color.inputtextcolorPrimaryVariant,
                headerStyle: {
                    backgroundColor: color.bgPrimary
                },
                headerTitleAlign: 'center',
                headerLeft: ()=> (<DrawerToggleButton tintColor={color.inputtextcolorPrimaryVariant}/>),
                headerSearchBarOptions: {
                    headerIconColor: color.inputtextcolorPrimaryVariant,
                    textColor: color.inputtextcolorPrimaryVariant, 
                }
                
            }}/>
            <Stack.Screen name="Editar" />
        </Stack>
    )
}