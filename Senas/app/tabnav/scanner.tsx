import { ScrollView, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useColor from '../../temas/Temas';

export default function Scanner() {
    const color = useColor()
    const styles = StyleSheet.create({
        container:{
          backgroundColor: color.bgPrimary,
          flex: 1
        },
        Cinza:{
          height: 525,
          backgroundColor: color.nome === 'dark' ? color.bgPrimary : '#FBFBFB',
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


