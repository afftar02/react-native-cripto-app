import * as NavigationBar from 'expo-navigation-bar';
import { Navigation } from "./screens/Navigation";

NavigationBar.setBackgroundColorAsync("black");

export default function App() {
  return (
    <Navigation />
  );
}
