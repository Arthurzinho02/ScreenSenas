import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import Footer from '../../../componts/footer';
import Nav from '../../../componts/nav';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Scanner() {
    const styles = StyleSheet.create({
        container:{
          flex: 1
        },
        Cinza:{
          height: 525,
          backgroundColor: '#FBFBFB',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 20
        }
      })
  return (
    <>
    <StatusBar backgroundColor='#FF0000'/>
    <View style={styles.container}>
    <Nav cor='#FF0000' corText='#FFFFFF' text='Scanner' ionicons={<AntDesign name="arrowleft"size={25} color="#FFFFFF" />} ionicons1={<FontAwesome6 name="arrow-rotate-right" size={25} color="#FFFFFF" />}/>
      <ScrollView>
        <View style={styles.Cinza}>
        <MaterialIcons name="qr-code-scanner" size={300} color="#5D5C5C" />
        </View>
      </ScrollView>
      <Footer bw={1} bcolor='#F5F5F5' ionicons={<FontAwesome6 name="camera-rotate" size={25} color="#595959" />} ionicons1={<FontAwesome5 name="list-ol" size={20} color="#595959" />}/>
    </View>
    </>
  );
}


