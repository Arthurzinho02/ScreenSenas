import Header from '../componts/header';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../componts/input';
import Button from '../componts/button';


export default function App() {
  return (
    <View>
      <Header cor='#011E83' texto='Recuperação de senha' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Insira seu e-mail para recuperar a senha!</Text>
        <Input nome='E-mail' texto='Insira seu e-mail'/>
        <Button nome='Recuperar'/>
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
