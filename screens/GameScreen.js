import { Alert, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import NumberContainer from "../components/NumberContainer"
import PrimaryButton from "../components/PrimaryButton"
import {Ionicons} from "@expo/vector-icons"

function generateRandomBetween(min, max, exclude){
    const rdNum = Math.floor(Math.random() * (max-min)) + min
    if (rdNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }
    return rdNum
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({userNumber, gameOverHandler})=>{
    const initialGuest = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuest)

    useEffect(()=>{
        if(currentGuess === userNumber){
            gameOverHandler()
        }
    }, [currentGuess, userNumber, gameOverHandler])

    const nextGestHandler =(direction)=>{
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!.", "You know that this is wrong...",[{text:'sorry', style:"cancel"}])
            return;
        }
        if(direction==='lower'){
            maxBoundary = currentGuess
        }
        else{
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber )
    }    

    return <View style={styles.screen}>
       <Title>
         Opponent's Guess 
       </Title>
       <NumberContainer >{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or lower?</Text>
            <View>
                <View>
                    <PrimaryButton onPress={nextGestHandler.bind(this,'lower')}>
                        <Ionicons name="remove" color="white" size={24} />
                    </PrimaryButton>                    
                </View>
                <View>
                    <PrimaryButton onPress={nextGestHandler.bind(this, 'greater')}>
                    <Ionicons name="add" color="white" size={24} />
                    </PrimaryButton>
                </View>
            </View>
        </View>
    </View>
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12,
        marginTop:15,
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        
    }
})