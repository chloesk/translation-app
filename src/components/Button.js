import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default (props) => {
  const { onPress, isSelected, text } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        isSelected ? styles.buttonSelected : styles.buttonNotSelected,
      ]}
    >
      <Text styles={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ffffff80",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
  },
  buttonSelected: {
    borderColor: "white",
  },
  buttonNotSelected: {
    borderColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
