import { TextInput, StyleSheet, View } from "react-native";
import PrimaryButtton from "../components/PrimaryButtton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtton>Reset</PrimaryButtton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtton> confirm </PrimaryButtton>
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
    backgroundColor: "#5b0f89",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
