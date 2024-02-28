
import { Text, View, Image, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import styles from './assets/style/style';


export default function App() {
  
  const [jogador, setJogador] = useState(0)
  const [computador, setComputador] = useState(0)
  const [pontoJogador, setPontoJogador] = useState(0)
  const [pontoComputador, setPontoComputador] = useState(0)
  const [visu, setVisu] = useState (false)

  function closeModal () {
    setVisu(false)
  }
  

  function openModal () {
    setVisu(true)
  }
  
  function exibirImagem (valor) {
    
    if (valor==1) {
      return (<Image style = {styles.imgCaixa} source={require ('./assets/imgs/pedra.png')}/>)
    } else if (valor==2) {
      return (<Image style = {styles.imgCaixa} source={require ('./assets/imgs/papel.png')}/>)
    } else if (valor==3) {
      return (<Image style = {styles.imgCaixa} source={require ('./assets/imgs/tesoura.png')}/>)
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

    if ((jogador==1 && computador==3) ||(jogador==2 && computador==1)||(jogador==3 && computador==2)) {
      setPontoJogador(pontoJogador+1)
      console.log("Você ganhou!" + pontoJogador)
    } else if (jogador==computador) {
      console.log ("Empate")
    } else {
      setPontoComputador(pontoComputador+1)
      console.log ("Você perdeu!" + pontoComputador)
    }
  }

  function reiniciar () {
    setComputador(0)
    setJogador (0)
    setPontoComputador(0)
    setPontoJogador(0)
  }


  return (
    <View style={styles.container}>
      <View style = {styles.titulo}>
        <Image style = {styles.titulo} source={require ('./assets/imgs/titulo.png')}/>
      </View>

      <View style = {styles.tituloPlacar}>
        <Text style = {styles.placarTit}>PLACAR</Text>
      </View>

      <View style = {styles.resultPlacar}>
        <Text style = {styles.valorPlacar}>{pontoJogador}</Text>
        <Text style = {styles.valorPlacar}>{pontoComputador}</Text>
      </View>
      <View style = {styles.resultPlacar}>
        {exibirImagem(jogador)}
        <Image style = {styles.imgVS} source={require ('./assets/imgs/vs.png')}/>
        {exibirImagem(computador)}
      </View>
        
       
        
      <View style = {styles.buttonRestart}>
        <Pressable  style = {styles.buttonRestart1} onPress={()=>openModal()}><Text>Reiniciar Partida</Text></Pressable>
      </View>
      <View style = {styles.options}>
      <Pressable onPress={()=>gerarNumero(1)}>
         <Image style = {styles.imgCaixa} source={require ('./assets/imgs/pedra.png')}/>
      </Pressable>

      <Pressable onPress={()=>gerarNumero(2)}>
         <Image style = {styles.imgCaixa} source={require ('./assets/imgs/papel.png')}/>
      </Pressable>

      <Pressable onPress={()=>gerarNumero(3)}>
        <Image style = {styles.imgCaixa} source={require ('./assets/imgs/tesoura.png')}/>
      </Pressable>
     
      <Modal visible={visu} animationType='fade' transparent= {true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Pressable style={styles.botao2} onPress={()=>reiniciar}>
              <Text style={styles.botaoPartida}>Reiniciar</Text>
            </Pressable>
            <Pressable style={styles.botao1} onPress={()=>closeModal()}>
              <Text style={styles.botaoPartida}>Fechar</Text>
            </Pressable>

          </View>

        </View>

      </Modal>

     
      

      </View>
    </View>
  );
}


