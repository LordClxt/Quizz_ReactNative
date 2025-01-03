import { Image, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/colors"
import Title from "../components/Title"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame})=>{
    return <View style={styles.screenContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/success.png')} />
        </View>
        <Text style={styles.smmuaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number
            <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
}

export default GameOverScreen   

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        padding:20
    },  
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    smmuaryText:{
        fontFamily:'open-sens',
        fontSize:24,
        textAlign:'center',
        marginBottom:24
    },
    highlight:{
        fontWeight:'bold',
        fontFamily:'pacifico',
        color:Colors.primary500
    }
})