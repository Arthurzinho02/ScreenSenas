import Header from '@comp/header';
import { StyleSheet, View, StatusBar  } from 'react-native';
import Input from '@comp/input';
import Button from '@comp/button';
import useColor from '../../temas/Temas';



export default function Cadastrarse() {
  const color = useColor()
  const styles = StyleSheet.create({
    container:{
      marginLeft:20,
      marginRight:20,
      gap:7,
      marginTop: 15
    },
  
  });
  return (
    <View style={{backgroundColor: color.bgPrimary, height: '100%'}}>
      <Header cor={color.nome === 'dark'? color.bgPrimary : color.bgSecundary} texto='Cadastre-se' />
      <View style={styles.container}>
        <Input label='Nome' placeholder='Insira seu nome:' cor={color}/>
        <Input label='Sobrenome' placeholder='Insira seu sobrenome:' cor={color}/>
        <Input label='E-mail' placeholder='Insira seu e-mail:' cor={color}/>
        <Input label='Telefone' placeholder='Insira seu telefone:' cor={color}/>
        <Input secureTextEntry label='Senha' placeholder='Insira sua senha:' cor={color}/>
        <Input secureTextEntry label='Confirmar senha' placeholder='Insira sua senha:' cor={color}/>
        <Button nome='Cadastrar-se' href="index" cor={color}/>
      </View>
    </View>
  );
}

