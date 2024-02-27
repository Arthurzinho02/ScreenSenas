import Header from '../componts/header';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../componts/input';
import Button from '../componts/button';


export default function App() {
  return (
    <View>
      <Header cor='#FF0000' texto='Cadastre-se' />
      <View style={styles.container}>
        <Input nome='Nome' texto='Insira seu nome:'/>
        <Input nome='Sobrenome' texto='Insira seu sobrenome:'/>
        <Input nome='E-mail' texto='Insira seu e-mail:'/>
        <Input nome='Telefone' texto='Insira seu telefone:'/>
        <Input nome='Senha' texto='Insira sua senha:'/>
        <Input nome='Confirmar senha' texto='Insira sua senha:'/>
        <Button nome='Cadastrar-se'/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight:20,
    gap:7
  },

});
