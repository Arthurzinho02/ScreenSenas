import { ScrollView, View, StyleSheet, StatusBar } from 'react-native';
import Footer from '@comp/footer';
import Nav from '@comp/nav';
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
    
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Cinza}>
        <MaterialIcons name="qr-code-scanner" size={300} color="#5D5C5C" />
        </View>
      </ScrollView>
    </View>
    </>
  );
}


