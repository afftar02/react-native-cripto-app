import { View, Text, StatusBar } from "react-native";
import Main from "./screens/Main";
import * as NavigationBar from 'expo-navigation-bar';

NavigationBar.setBackgroundColorAsync("black");

export default function App() {
  return (
    <View style={{backgroundColor: "black", height: "100%" }} >
      <StatusBar />
      <Main/>
    </View>
  );
}
