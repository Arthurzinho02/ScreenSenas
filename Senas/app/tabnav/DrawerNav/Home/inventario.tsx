import { ScrollView, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Footer from '@comp/footer';
import Nav from '@comp/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import Itens from '@comp/itens';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Inventário() {
  return (
    <>
    <StatusBar backgroundColor='#ffffff'/>
    <View style={styles.container}>
      <ScrollView>
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
        <Itens codigo='956389' texto='CADEIRA  SENAI' />
      </ScrollView>
      {/* <TouchableOpacity>
        <AntDesign style={styles.Icon} name="pluscircle" size={60} color="#FF0000" />
      </TouchableOpacity> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  Icon:{
    position: 'absolute',
    bottom: 20,
    right:20,
    zIndex: 1
  }
})
