import * as NavigationBar from 'expo-navigation-bar';
import { Navigation } from "./screens/Navigation";
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

NavigationBar.setBackgroundColorAsync("black");

export const AppContext = React.createContext('');

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Navigation />
    </AppContext.Provider>
  );
}
