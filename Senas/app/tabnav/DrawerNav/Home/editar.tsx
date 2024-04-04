import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import Footer from '@comp/footer';
import Nav from '@comp/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import InputI from '@comp/inputitens';


export default function Editar() {
  return (
    <>
    <StatusBar backgroundColor='#FF0000'/>
    <View style={styles.container}>
      <ScrollView style={styles.scrool}>
        <InputI label='Nº Inventário'/>
        <InputI label='Descrição'/>
        <InputI label='Local'/>
        <InputI label='Responsável'/>
        <InputI label='Data de registro'/>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  scrool:{
    margin:20,
    marginTop: 50,

  }
})

