import Header from '@comp/header';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '@comp/input';
import Button from '@comp/button';
import { Link } from 'expo-router';
import useColor from '../../temas/Temas';

const color = useColor()

export default function Logar() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: color.bgPrimary,
      marginLeft: 20,
      marginRight: 20,
      gap: 10
    },
    Texto: {
      marginTop: 40,
      marginBottom: 30,
      fontSize: 16,
      fontWeight: "500",
      alignSelf: 'center',
      textAlign: 'center'
    },
    Link: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TextLink: {
      color: '#011E83'
    },
  
  });
  return (
    <View style={{backgroundColor: color.bgPrimary, height: 850}}>
      <Header cor={color.nome === 'dark' ? color.bgPrimary : '#000000'} texto='Login' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Faça Login para Acessar o Sistema!</Text>
        <Input label='E-mail' placeholder='Insira seu e-mail:' />
        <Input secureTextEntry label='Senha' placeholder='Insira sua senha:' />
        <Button nome='Entrar' href="tabnav" />
        <View style={styles.Link}>
          <Link href="Telasiniciais/Cadastrar" asChild>
            <TouchableOpacity>
              <Text style={styles.TextLink}>Cadastre-se</Text>
            </TouchableOpacity>
            </Link>
            <Link href="Telasiniciais/recuperacao" asChild>
              <TouchableOpacity>
                <Text style={styles.TextLink}>Esqueçeu a senha?</Text>
              </TouchableOpacity>
            </Link>
        </View>
      </View>
    </View>
  );
}

