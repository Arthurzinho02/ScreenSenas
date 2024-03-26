import Header from '../componts/header';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from '../componts/input';
import Button from '../componts/button';
import { Link } from 'expo-router';


export default function Logar() {
  return (
    <View>
      <Header cor='#000000' texto='Login' />
      <View style={styles.container}>
        <Text style={styles.Texto}>Faça Login para Acessar o Sistema!</Text>
        <Input label='E-mail' placeholder='Insira seu e-mail:' />
        <Input secureTextEntry label='Senha' placeholder='Insira sua senha:' />
        <Button nome='Entrar' href="drawer" />
        <View style={styles.Link}>
        <Link href="/Cadastrar" asChild>
          <TouchableOpacity>
            <Text style={styles.TextLink}>Cadastre-se</Text>
          </TouchableOpacity>
          </Link>
          <Link href="/recuperacao" asChild>
            <TouchableOpacity>
              <Text style={styles.TextLink}>Esqueçeu a senha?</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
