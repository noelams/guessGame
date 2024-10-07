import { StyleSheet, View } from "react-native";
import Colors from "../../Constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
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
});

export default Card;
