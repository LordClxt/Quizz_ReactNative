import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
// import GameOver from "./screens/GameOverScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {

  const [userNumber, setUserNumber] = useState('')
  const [gameIsOver, setGameIsOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontLoaded] = useFonts({
    'pacifico':require('./assets/fonts/Pacifico-Regular.ttf'),
    'open-sens-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sens':require('./assets/fonts/OpenSans-Regular.ttf')
  })

  if(!fontLoaded){
    return <AppLoading />
  }

  const pickedNumberHandler = (number)=>{
    setUserNumber(number)
    setGameIsOver(false)
  }

  let screen = <StartGameScreen pickNumber={pickedNumberHandler} />

  const gameOverHandler = ()=>{
    setGameIsOver(true)
  }
  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)
  }

  if(userNumber){
    screen = <GameScreen setGuessRounds={setGuessRounds} gameOverHandler={gameOverHandler} userNumber={userNumber}  />
  }

  if(gameIsOver && userNumber){
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.container}
        imageStyle={styles.backgroudImage}
        resizeMode="cover"
      >
        <SafeAreaView style={[styles.container, {padding:24}]} >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudImage:{
    opacity:0.25,
  }
});
