import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { iconNames, Icon } from "../assets/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions/getDataAction";

const { width } = Dimensions.get("screen");

export default function Homepage({ navigation }) {
  const [spinner, setSpinner] = useState(true);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
      .then(function (response) {
        dispatch(getData("GET_DATA", response.data));
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [dispatch]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", item)}
        style={styles.renderItemContainer}
        key={item.id}
      >
        <View style={styles.fastImageContainerStyle}>
          <Image
            style={styles.fastImageStyle}
            source={{ uri: item.avatar }}
            resizeMode="contain"
          />
          <Text style={styles.renderItemNameText}>{item.name}</Text>
        </View>
        <Icon
          onPress={() => dispatch(getData("DELETE_DATA", item))}
          iconName={iconNames.DeleteIcon}
        />
      </TouchableOpacity>
    );
  };
  if (spinner) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.id}
        data={selector.getDataReducer.payload}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  renderItemContainer: {
    width: width,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#808080",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  addCharacterStyle: {
    marginTop: 72,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1099ff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  addCharacterTextStyle: {
    fontSize: 60,
    color: "#fff",
    lineHeight: 62,
  },
  fastImageContainerStyle: { flexDirection: "row", alignItems: "center" },
  fastImageStyle: { width: 64, height: 64 },
  renderItemNameText: { textAlign: "left", marginLeft: 8 },
});
