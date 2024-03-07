import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../componts/footer';
import Nav from '../componts/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import Itens from '../componts/itens';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Inventário() {
  return (
    <>
    <View style={styles.container}>
      <Nav text='Lista' corText='#595959' ionicons={<FontAwesome5 name="bars" size={24} color="#595959" />} ionicons1={<FontAwesome5 name="search" size={24} color="#666666" />}/>
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
      <TouchableOpacity>
        <AntDesign style={styles.Icon} name="pluscircle" size={60} color="#FF0000" />
      </TouchableOpacity>
      <Footer cor='#FF0000' ionicons={<FontAwesome6 name="camera-rotate" size={25} color="#FFFFFF" />} ionicons1={<FontAwesome5 name="list-ol" size={20} color="#FFFFFF" />}/>
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
