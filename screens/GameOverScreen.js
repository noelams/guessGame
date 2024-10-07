import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../Constants/colors";
import PrimaryButtton from "../components/UI/PrimaryButtton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summary}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButtton onPress={onStartNewGame}>Start New Game</PrimaryButtton>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    alignItems: "center",
  },
  summary: {
    fontStyle: "italic",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  highlight: {
    fontWeight: "bold",
  },
});

export default GameOverScreen;
