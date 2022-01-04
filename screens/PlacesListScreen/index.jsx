import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { HeaderRightButton } from "../../components";

const PlacesListScreen = (props) => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderRightButton
        icon={Platform.OS === "android" ? "md-add" : "ios-add"}
        onPress={() => {
          navData.navigation.navigate("NewPlace");
        }}
      />
    ),
  };
};

export default PlacesListScreen;
