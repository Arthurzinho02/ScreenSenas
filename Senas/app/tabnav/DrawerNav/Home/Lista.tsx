import { ScrollView, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

import Itens from '@comp/itens';

import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Inventário() {
  return (
    <>
    <StatusBar backgroundColor='#ffffff'/>
    <View style={styles.container}>
      <ScrollView>
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao"codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
        <Itens link="tabnav/DrawerNav/Home/descricao" codigo='956389' texto='CADEIRA  SENAI' />
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
