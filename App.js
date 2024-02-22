
import { Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import styles from './assets/style/style';


export default function App() {
  
  const [jogador, setJogador] = useState(0)
  const [computador, setComputador] = useState(0)

  function exibirImagem (valor) {
    if (valor==1) {
      return (<Image style = {styles.imgOpcao} source={require ('./assets/imgs/pedra.png')}/>)
    } else if (valor==2) {
      return (<Image style = {styles.imgOpcao} source={require ('./assets/imgs/papel.png')}/>)
    } else if (valor==3) {
      return (<Image style = {styles.imgOpcao} source={require ('./assets/imgs/tesoura.png')}/>)
    } else {
      return (<Image style = {styles.imgCaixa} source={require ('./assets/imgs/caixa.png')}/>)
    }
  }

  function gerarNumero (valor) {
    setJogador(valor)
    let maquina = Math.floor (Math.random()*3)+1
    setComputador (maquina)
    console.log(jogador)
    console.log(computador)
  }


  return (
    <View style={styles.container}>
      <View style = {styles.titulo}>
        <Image source={require ('./assets/imgs/titulo.png')}/>
      </View>

      <View style = {styles.tituloPlacar}>
        <Text style = {styles.placarTit}>PLACAR</Text>
      </View>

      <View style = {styles.resultPlacar}>
        <Text style = {styles.valorPlacar}>0</Text>
        <Text style = {styles.valorPlacar}>0</Text>
      </View>
      <View style = {styles.resultPlacar}>
        {exibirImagem(jogador)}
        <Image style = {styles.imgVS} source={require ('./assets/imgs/vs.png')}/>
        {exibirImagem(computador)}
      </View>
        
       
        
      <View style = {styles.buttonRestart}>
        <Pressable  style = {styles.buttonRestart1} onPress={()=>gerarNumero(0)}><Text>Reiniciar Partida</Text></Pressable>
      </View>
      <View style = {styles.options}>
      <Pressable onPress={()=>gerarNumero(1)}>
         <Image style = {styles.imgOpcao} source={require ('./assets/imgs/pedra.png')}/>
      </Pressable>

      <Pressable onPress={()=>gerarNumero(2)}>
         <Image style = {styles.imgOpcao} source={require ('./assets/imgs/papel.png')}/>
      </Pressable>

      <Pressable onPress={()=>gerarNumero(3)}>
        <Image style = {styles.imgCaixa} source={require ('./assets/imgs/tesoura.png')}/>
      </Pressable>
     
     
      

      </View>
    </View>
  );
}


