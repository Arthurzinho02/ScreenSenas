import { useColorScheme } from "react-native"


export interface Cores {
    bgPrimary: string,
    bgSecundary: string,
    bgInfo?: string
    textcolorPrimary: string
    textcolorSecundary: string
    //----------------------Input----------
    inputbgPrimaryVariant: string
    inputtextcolorPrimaryVariant: string
    inputbgHover: string
    nome?: string

}

const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textcolorPrimary: "#101010",
    textcolorSecundary: "#FFFFFF",
    inputbgPrimaryVariant: "#F5F5F5",
    inputtextcolorPrimaryVariant: "#595959",
    inputbgHover: "#F39200"
}
const dark: Cores = {
    bgPrimary:"#240707",
    bgSecundary: "#FF0000",
    textcolorPrimary: "#FFFFFF",
    textcolorSecundary: "#D9D9D9",
    inputbgPrimaryVariant: "#3A2828",
    inputtextcolorPrimaryVariant: "#CBCBCB",
    inputbgHover: "#F39200",
}

export default function useColor(){
    const ColorScheme = useColorScheme()
    if (ColorScheme === 'dark'){
        dark.nome = "dark"
        return dark
    }
    else{
        light.nome = "light"
        return light
    }
}