import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar, Appbar, Badge, Banner, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(true);
  const [showPassword, setShowPassword] = useState("eye-off");

  const handleShowPassword = () => {
    if (showPassword === "eye") {
      setShowPassword("eye-off");
    } else {
      setShowPassword("eye");
    }
    setVisible(!visible);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            marginVertical: 10,
            fontWeight: 600,
            fontFamily: "monospace",
          }}
        >
          Welcome!
        </Text>
        <TextInput
          label={"Enter your name"}
          mode={"flat"}
          style={{ width: 300, marginVertical: 10 }}
          // error = {true}
          selectionColor="lightgrey"
          // underlineColor = "white"
          activeUnderlineColor="green"
          cursorColor="purple"
        />
        <TextInput
          // dense = {500}
          // outlineColor="firebrick"
          label={"Address"}
          // textColor="blue"
          multiline={true}
          numberOfLines={2}
          // right = {<TextInput.Affix text="name" />}
          onFocus={() => console.warn("onFocus ")}
          mode={"outlined"}
          style={{ width: 300, marginVertical: 10 }}
          selectionColor="lightgrey"
          // activeOutlineColor = "green"
          cursorColor="purple"
          dense={true}
          // contentStyle = {{
          //   margin : 20,

          // }}
          onBlur={() => console.warn("onBlur  ")}
          // editable = {false}
          right = { <TextInput.Icon icon={"home"} forceTextInputFocus = {true} />}
        />
        <TextInput
          secureTextEntry={visible}
          label={"password"}
          mode={"outlined"}
          // focusable={true}
          disabled={false}
          right={
            <TextInput.Icon icon={showPassword} onPress={handleShowPassword} />
          }
          // outlineColor="transparent"
          style={{ width: 300, marginVertical: 10 }}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    width: "100%",
    // backgroundColor : 'cadetblue',
    alignItems: "center",
    margin: 10,
    // flexDirection: "row",
  },
  desc: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: 0,
    // right: 0,
  },
});
