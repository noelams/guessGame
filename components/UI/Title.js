import { Text, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
  },
});

export default Title;
