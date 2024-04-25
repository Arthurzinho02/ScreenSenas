import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import useColor from "../../../../temas/Temas";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';

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
            <Stack.Screen name="cadastro" options={{
                headerTintColor: "#FFFFFF",
                headerStyle: {
                    backgroundColor: color.bgSecundary
                },
                headerTitleAlign: 'center',
                headerTitle: 'Cadastro de itens',
                headerRight: ()=>(<TouchableOpacity><AntDesign name="pluscircleo" size={24} color='white' /></TouchableOpacity>)
            }} />
            <Stack.Screen name="descricao" options={{
                headerTintColor: "#FFFFFF",
                headerStyle: {
                    backgroundColor: color.bgSecundary
                },
                headerTitleAlign: 'center',
                headerTitle: 'Descrição do item',
                headerRight: ()=>(<TouchableOpacity><FontAwesome6 name="arrow-rotate-right" size={24} color='white'/></TouchableOpacity>)
            }}/>
        </Stack>
    )
}