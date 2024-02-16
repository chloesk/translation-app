import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en: { welcome: "Hello" },
  ko: { welcome: "안녕" },
  ja: { welcome: "こんにちは" },
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode;

console.log(i18n.t("welcome"));
const deviceLanguage = getLocales()[0].languageCode;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{deviceLanguage}</Text>
      <Text>{i18n.t("welcome")}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
