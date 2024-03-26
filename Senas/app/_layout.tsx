import { Stack } from "expo-router";

export default function layout(){
    return(
        <Stack screenOptions={{
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: "",
            statusBarStyle: 'light',
        }}>
            <Stack.Screen name="index" options={{
            statusBarColor: '000000'
        }} />
            <Stack.Screen name="Cadastrar" options={{
            statusBarColor: 'FF000'
        }} />
            <Stack.Screen name="recuperacao" options={{
            statusBarColor: '011e83'
        }} />
            <Stack.Screen name="drawer" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}