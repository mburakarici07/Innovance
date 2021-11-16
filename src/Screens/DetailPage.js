import React from "react";
import { View, Image, Text, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export default function DetailPage({ route }) {
  const item = route.params;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.Image}
        source={{ uri: item.avatar }}
      />
      <Text style={styles.textImage}>{item.name}</Text>
      <Text style={styles.textJopName}>{item.job}</Text>
      <Text style={styles.textAboutName}>{item.about}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
  },
  Image: {
    width: width - 32,
    height: width - 32,
  },
  textName: { fontSize: 42 },
  textJopName: { fontSize: 24, color: "#808080" },
  textAboutName: { fontSize: 12, color: "#808080", marginTop: 16 },
});
