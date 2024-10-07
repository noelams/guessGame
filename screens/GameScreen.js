import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/UI/Title";
import GuessedNumContainer from "../components/game/GuessedNumContainer";
import PrimaryButtton from "../components/UI/PrimaryButtton";
import InstructionText from "../components/UI/InstructionText";
import Card from "../components/UI/Card";
import Colors from "../Constants/colors";
import GuessLogItem from "../components/game/GuessLogItem";

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
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [userNumber]);

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.GameScreen}>
      <Card>
        <Title>Opponent's Guess</Title>
        <GuessedNumContainer>{currentGuess}</GuessedNumContainer>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-circle-outline" size={24} />
            </PrimaryButtton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add-circle-outline" size={24} />
            </PrimaryButtton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  GameScreen: {
    flex: 1,
    padding: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginTop: 12,
  },
  listContainer: {
    flex: 1,
  },
});
export default GameScreen;
