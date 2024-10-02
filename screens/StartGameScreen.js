import { TextInput, StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import PrimaryButtton from "../components/UI/PrimaryButtton";
import Colors from "../Constants/colors";

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
    <View style={styles.inputContainer}>
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
            {" "}
            confirm{" "}
          </PrimaryButtton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, //andriod specific
    shadowColor: "black", //ios specific
    shadowOffset: { width: 0, height: 2 }, //ios specific
    shadowRadius: 6, //ios specific
    shadowOpacity: 0.25, //ios specific
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
