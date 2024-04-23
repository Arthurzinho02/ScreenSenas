import Header from '@comp/header';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Input from '@comp/input';
import Button from '@comp/button';
import useColor from '../../temas/Temas';



export default function Recuperação() {
  const color = useColor()
  const styles = StyleSheet.create({
    container:{
      marginLeft:20,
      marginRight:20,
      gap:10
    },
    Texto: {
      color: color.textcolorPrimary,
      marginTop: 40,
      marginBottom: 30,
      fontSize: 16,
      fontWeight: "500",
      alignSelf: 'center',
      textAlign: 'center'
    },
  
  });
  return (
    <View style={{backgroundColor: color.bgPrimary, height: '100%'}}>
      <Header cor={color.nome === 'dark'? color.bgPrimary : color.bgInfo} texto='Recuperação de senha' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Insira seu e-mail para recuperar a senha!</Text>
        <Input label='E-mail' placeholder='Insira seu e-mail'cor={color}/>
        <Button nome='Recuperar' href="index" cor={color}/>
      </View>
    </View>
  );
}

