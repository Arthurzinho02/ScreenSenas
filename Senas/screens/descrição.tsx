import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../componts/footer';
import Nav from '../componts/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Caracteristica from '../componts/caracteristica';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Descrição() {
    const styles = StyleSheet.create({
        container:{
          flex: 1,
          marginTop:30
        },
        info:{
          margin:20,
          marginTop: 40,
          gap: 20
        },
        Cinza:{
          height: 525,
          backgroundColor: '#FBFBFB'
        },
        Icon:{
          position: 'absolute',
          bottom: 20,
          right:20,
          zIndex: 1,
        },
      })
  return (
    <>
    <StatusBar backgroundColor='#FF0000'/>
    <View style={styles.container}>
    <Nav cor='#FF0000' corText='#FFFFFF' text='Descrição do item' ionicons={<AntDesign name="arrowleft"size={25} color="#FFFFFF" />} ionicons1={<FontAwesome6 name="arrow-rotate-right" size={25} color="#FFFFFF" />}/>
      <ScrollView>
        <View style={styles.Cinza}>
          <View style={styles.info}>
            <Caracteristica titulo='Nº do Inventário:' texto='957689'/>
            <Caracteristica titulo='Descrição:' texto='CADEIRA GIRATÓRIOA'/>
            <Caracteristica titulo='Local:' texto='SALA C13'/>
            <Caracteristica titulo='Responsável:' texto='CARLOS'/>
            <Caracteristica titulo='Data de Registro:' texto='05/03/2024'/>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity>
        <MaterialCommunityIcons style={styles.Icon} name="pencil-circle"size={60} color="#FF0000" />
      </TouchableOpacity>
      <Footer bw={1} bcolor='#F5F5F5' ionicons={<FontAwesome6 name="camera-rotate" size={25} color="#595959" />} ionicons1={<FontAwesome5 name="list-ol" size={20} color="#595959" />}/>
    </View>
    </>
  );
}


