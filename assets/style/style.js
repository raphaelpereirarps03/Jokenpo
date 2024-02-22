import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'space-evenly'
    },

    titulo: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },
    tituloPlacar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle:'normal',
        width:'100%',
    },

    placarTit: {
        fontSize: 25,
    },

    resultPlacar: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
    },

    valorPlacar: {
        padding:60,
        fontSize: 20,
    },

    imgCaixa: {
        height:80,
        width:80,
    },

    imgVS: {
        height:80,
        width:110,
    },

    buttonRestart: {
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },
    buttonRestart1: {
        
        borderBottomColor: '#000',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        width:150,
        borderRadius:5,
        color: '#fff',
        backgroundColor: '#00BFFF'
    },

    options: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
        width:'100%',
    },

    imgCaixa: {
        height:100,
        width:120,
    },

});

export default styles
