import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ButtonContainer } from "./styles";
import { Platform } from "react-native";
import Colors from "../../constants/Colors";

export const HeaderRightButton = (props) => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <Ionicons
        name={props.icon}
        size={23}
        color={Platform.OS === "android" ? "white" : Colors.primary}
      />
    </ButtonContainer>
  );
};
