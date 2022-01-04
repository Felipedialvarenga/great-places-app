import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { Form, Input, Label } from "./styles";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (text) => {
    setTitle(text);
  };

  const savePlaceHandler = () => {};

  return (
    <ScrollView>
      <Form>
        <Label>Title</Label>
        <Input onChangeText={titleChangeHandler} value={title} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </Form>
    </ScrollView>
  );
};

export default NewPlaceScreen;
