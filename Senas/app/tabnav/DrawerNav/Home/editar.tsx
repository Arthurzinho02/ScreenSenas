import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import InputI from '@comp/inputitens';
import useColor from '../../../../temas/Temas';


export default function Editar() {
  const color = useColor()
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: color.bgPrimary
    },
    scrool:{
      margin:20,
      marginTop: 50,
  
    }
  })
  return (
    <>
    <StatusBar backgroundColor={color.bgSecundary}/>
    <View style={styles.container}>
      <ScrollView style={styles.scrool}>
        <InputI label='Nº Inventário' cor={color}/>
        <InputI label='Descrição' cor={color}/>
        <InputI label='Local' cor={color}/>
        <InputI label='Responsável' cor={color}/>
        <InputI label='Data de registro' cor={color}/>
      </ScrollView>
    </View>
    </>
  );
}



