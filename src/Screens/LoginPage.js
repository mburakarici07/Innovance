import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const navigation = useNavigation();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigateInfo, setNavigateInfo] = useState(false);

  const loginInfo = { mail: "burakarici@gmail.com", pw: 123456 };

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmail(text);
      setValidated(false);
      return false;
    } else {
      setEmail(text);
      setValidated(true);
    }
  };

  const handleNavigation = () => {
    if (loginInfo.mail == email && loginInfo.pw == password) {
      setNavigateInfo(false);
      navigation.navigate("Home");
    } else {
      setNavigateInfo(true);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerTextStyle}>HOŞGELDİNİZ</Text>
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => validate(text)}
          value={email}
          style={
            !validated
              ? { ...styles.textInputStyle, borderColor: "red" }
              : styles.textInputStyle
          }
          placeholder="E-mail"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInputStyle}
          placeholder="Şifre"
        />
        {navigateInfo && (
          <Text style={styles.warningTextStyle}>
            Hatalı email yada parola girdiniz.
          </Text>
        )}
        <TouchableOpacity
          id="Giriş Yap"
          style={styles.buttonStyle}
          onPress={handleNavigation}
        >
          <Text style={styles.buttonTextStyle}>GİRİŞ YAP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  headerTextStyle: { alignSelf: "center" },
  warningTextStyle: { color: "red", alignSelf: "auto" },
  textInputStyle: {
    width: "90%",
    height: 50,
    borderWidth: 0.3,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonStyle: {
    width: "90%",
    height: 50,
    marginVertical: 10,
    backgroundColor: "#1099ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonTextStyle: { color: "white" },
});
