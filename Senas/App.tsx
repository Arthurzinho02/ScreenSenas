import { ScrollView, View, StyleSheet } from 'react-native';
import Footer from './componts/footer';
import Nav from './componts/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import InputI from './componts/inputitens';


export default function App() {
  return (
    <>
    <View style={styles.container}>
    <Nav cor='#FF0000' corText='#FFFFFF' text='Cadastro de itens' ionicons={<AntDesign name="arrowleft" size={30} color="#FFFFFF" />} ionicons1={<AntDesign name="pluscircleo" size={30} color="#FFFFFF" />}/>
      <ScrollView style={styles.scrool}>
        <InputI titulo='Nº Inventário'/>
      </ScrollView>
      <Footer bw={1} bcolor='#F5F5F5' ionicons={<FontAwesome6 name="camera-rotate" size={25} color="#595959" />} ionicons1={<FontAwesome5 name="list-ol" size={20} color="#595959" />}/>
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
    bottom: 70,
    right:20,
    zIndex: 1
  },
  scrool:{
    margin:20,
    marginTop: 50
  }
})

