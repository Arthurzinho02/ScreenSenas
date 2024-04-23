import { View, StyleSheet, Image, Text } from 'react-native';
type HeaderProps = {
  cor: string|undefined;
  texto: string;
}
export default function Header({ cor, texto }:HeaderProps) {
    const LogoSenai =require('../assets/senai.png')
    return (
        <View style={[styles.container, { backgroundColor: cor }]}>
        <Image source={LogoSenai} style={styles.Logo}/>
        <Text style={styles.Tex}>{texto}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius:5,
  },
  Logo:{
    marginTop:45,
    width: 181,
    height: 45,
  },
  Tex:{
    color: '#FFFFFF',
    fontSize: 20,
  },
});

