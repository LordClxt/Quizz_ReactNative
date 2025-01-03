import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

const StartGameScreen = ({pickNumber}) => {

   const [entiredNumber, setEntiredNumber] = useState('')
   const numberInputHandler = (text)=>{
        setEntiredNumber(text)
   }
    const resetInputHandler = ()=>{
        setEntiredNumber('')
    }   
   const confirmInputHandler = ()=>{
        const numberEntired = parseInt(entiredNumber)
        if(isNaN(numberEntired) || numberEntired <= 0 || numberEntired > 99){
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{text:'okay', style:'destructive', onPress:resetInputHandler}]
            )
            return
        }
        pickNumber(numberEntired)
   }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize={false}
        autoCorrect={false}
        value={entiredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Rest</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );

};

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems:'center'
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer:{
    flexDirection:'row',
  },
  buttonContainer:{
    flex:1,
    width:"100%",
    height:"100%"
  }
});
