import Header from '@comp/header';
import { StyleSheet, View, StatusBar  } from 'react-native';
import Input from '@comp/input';
import Button from '@comp/button';


export default function Cadastrarse() {
  return (
    
    <View>
      <StatusBar backgroundColor='#FF0000'/>
      <Header cor='#FF0000' texto='Cadastre-se' />
      <View style={styles.container}>
        <Input label='Nome' placeholder='Insira seu nome:'/>
        <Input label='Sobrenome' placeholder='Insira seu sobrenome:'/>
        <Input label='E-mail' placeholder='Insira seu e-mail:'/>
        <Input label='Telefone' placeholder='Insira seu telefone:'/>
        <Input secureTextEntry label='Senha' placeholder='Insira sua senha:'/>
        <Input secureTextEntry label='Confirmar senha' placeholder='Insira sua senha:'/>
        <Button nome='Cadastrar-se' href="index"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginLeft:20,
    marginRight:20,
    gap:7,
    marginTop: 15
  },

});
