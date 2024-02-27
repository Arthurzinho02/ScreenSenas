import Header from '../componts/header';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../componts/input';
import Button from '../componts/button';


export default function App() {
  return (
    <View>
      <Header cor='#000000' texto='Login' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Faça Login para Acessar o Sistema!</Text>
        <Input nome='E-mail' texto='Insira seu e-mail:'/>
        <Input nome='Senha' texto='Insira sua senha:'/>
        <Button nome='Logar'/>
        <View style={styles.Link}>
          <TouchableOpacity>
            <Text style={styles.TextLink}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextLink}>Esqueçeu a senha?</Text>
          </TouchableOpacity>
        </View>
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
  Link:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  TextLink:{
    color: '#011E83'
  },

});
