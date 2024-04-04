import { Stack } from "expo-router";

export default function layout(){
    return(
        <Stack>
            <Stack.Screen name="index" options={{
            headerShown: false
        }} />
            <Stack.Screen name="Telasiniciais/Cadastrar" options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff"
        }} />
            <Stack.Screen name="Telasiniciais/recuperacao" options={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "#fff"

        }} />
            <Stack.Screen name="tabnav" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}