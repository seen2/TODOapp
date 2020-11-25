import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Hello() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const onAddTODO = (): void => {
    todo
      ? setTodoList([...todoList, todo])
      : alert("Sorry!!\nPlease Enter Something");
    setTodo("");
  };
  const onDeleteTODO = (index: number): void => {
    console.log(index);
    setTodoList(todoList.filter((todo, i) => index !== i));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 10,
          fontSize: 25,
          color: "white",
        }}
      >
        Enter TODO
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          marginBottom: 10,
          height: 40,
          color: "white",
        }}
        placeholder="Todo Item"
        placeholderTextColor="white"
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />
      <Button title="ADD TODO" onPress={() => onAddTODO()} />
      <ScrollView style={{}}>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 10,
              fontSize: 25,
              color: "white",
              backgroundColor: "red",
              textAlign: "center",
              borderRadius: 10,
              marginRight: "50%",
            }}
          >
            Todo List:
          </Text>

          {todoList.map((todo, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                marginBottom: 20,
                backgroundColor: "grey",
                borderRadius: 10,
                justifyContent: "space-between",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 10,
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "grey",
                  borderRadius: 10,
                  textAlign: "center",
                }}
              >
                {index + 1 + ":  "}
                {todo}
              </Text>
              <Button title="delete" onPress={() => onDeleteTODO(index)} />
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#121212" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
});
