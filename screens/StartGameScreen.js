import { TextInput, StyleSheet, View, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButtton from "../components/UI/PrimaryButtton";
import Colors from "../Constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if ((chosenNumber > 0 || chosenNumber < 100) && !isNaN(chosenNumber)) {
      onPickedNumber(chosenNumber);
      setEnteredNumber("");
    } else {
      Alert.alert("Invalid Number", "Number has to be between  1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
  }

  return (
    <View style={styles.root}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtton onPress={resetInputHandler}>Reset</PrimaryButtton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtton onPress={confirmInputHandler}>
              confirm
            </PrimaryButtton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
