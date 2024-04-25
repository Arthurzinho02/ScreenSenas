import { ScrollView, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import Itens from '@comp/itens';
import useColor from '../../../../temas/Temas';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Inventário() {
  const color = useColor()
  return (
    <>
    <StatusBar backgroundColor={color.bgPrimary}/>
    <View style={styles.container}>
      <ScrollView>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao"codigo='956389' texto='CADEIRA  SENAI'  cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
        <Itens href="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' cor={color}/>
      </ScrollView>
      <Link href={"tabnav/DrawerNav/Home/cadastro"} asChild>
        <TouchableOpacity>
          <AntDesign style={styles.Icon} name="pluscircle" size={60} color="#FF0000" />
        </TouchableOpacity>
      </Link>
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
