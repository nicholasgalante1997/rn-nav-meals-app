import React, {useState} from 'react';

// Necessary for Loading External Font Files
import * as Font from 'expo-font'
// Lag in Loading Fonts from Local Files
import {AppLoading} from 'expo'

// Main Navigation Component, Contains all Screen Components
import MealsNavigator from './navigation/MealsNavigator'
// For Optimization
import {enableScreens} from 'react-native-screens'

// Data Store
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import mealsReducer from './store/reducers/meals'

enableScreens();

// long form standard for combination of multiple reducers into root reducer
// typically kept in external rootReducer.js file, in revision; ref PearProgramming GH
const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

// Async load of local font files => fontFamily accessible designations
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  // management of AppLoading Component
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)} />
  }
  
  // Wrap App in Data Store
  return <Provider store={store}><MealsNavigator /></Provider>;
}


