import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Caracteristica from '@comp/caracteristica';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import useColor from '../../../../temas/Temas';

export default function Descrição() {
    const color = useColor()
    const styles = StyleSheet.create({
        container:{
          flex: 1,
          backgroundColor: color.bgPrimary
        },
        info:{
          margin:20,
          marginTop: 40,
          gap: 20
        },
        Cinza:{
          height: 525,
          backgroundColor: color.nome == 'dark' ? color.bgPrimary : "#FBFBFB"  
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
    <StatusBar backgroundColor={color.bgSecundary}/>
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Cinza}>
          <View style={styles.info}>
            <Caracteristica titulo='Nº do Inventário:' texto='957689' cor={color}/>
            <Caracteristica titulo='Descrição:' texto='CADEIRA GIRATÓRIOA' cor={color}/>
            <Caracteristica titulo='Local:' texto='SALA C13' cor={color}/>
            <Caracteristica titulo='Responsável:' texto='CARLOS' cor={color}/>
            <Caracteristica titulo='Data de Registro:' texto='05/03/2024' cor={color}/>
          </View>
        </View>
      </ScrollView>
      {/* Obs: O botão funciona, entretanto, existe um delay, sendo necessário apertar várias vezes para entrar */}
      <Link href={"tabnav/DrawerNav/Home/Editar"} asChild>
        <TouchableOpacity>
          <MaterialCommunityIcons style={styles.Icon} name="pencil-circle"size={60} color="#FF0000" />
        </TouchableOpacity>
      </Link>
    </View>
    </>
  );
}


