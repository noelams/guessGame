import { View, StyleSheet, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/UI/Title";
import GuessedNumContainer from "../components/game/GuessedNumContainer";
import PrimaryButtton from "../components/UI/PrimaryButtton";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Haa !", "That's not right", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.GameScreen}>
      <View>
        <Title>Opponent's Guess</Title>
        <GuessedNumContainer>{currentGuess}</GuessedNumContainer>
        <Text> Higher or Lower?</Text>
        <View>
          <PrimaryButtton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButtton>
          <PrimaryButtton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButtton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
    padding: 40,
  },
});
export default GameScreen;
