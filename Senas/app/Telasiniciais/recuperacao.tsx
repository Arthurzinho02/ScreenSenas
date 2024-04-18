import Header from '@comp/header';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Input from '@comp/input';
import Button from '@comp/button';
import useColor from '../../temas/Temas';

const color = useColor()

export default function Recuperação() {
  return (
    <View>
      <Header cor={color.nome === 'dark'? color.bgPrimary : color.bgInfo} texto='Recuperação de senha' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Insira seu e-mail para recuperar a senha! </Text>
        <Input label='E-mail' placeholder='Insira seu e-mail'/>
        <Button nome='Recuperar' href="index"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight:20,
    gap:10
  },
  Texto: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 16,
    fontWeight: "500",
    alignSelf: 'center',
    textAlign: 'center'
  },

});
