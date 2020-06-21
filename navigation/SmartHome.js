import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Dashboard from "../screens/Dashboard";
import WatchPage from "../screens/WatchPage";
import TimerPage from "../screens/TimerPage";
import GamePage from "../screens/GamePage";
import WeatherPage from "../screens/WeatherPage";
import AnimationPage from "../screens/AnimationPage";
import Settings from "../screens/Settings";


export default createStackNavigator(
                
  {
    Dashboard,
    Settings,
    WatchPage,
    TimerPage,
    GamePage,
    WeatherPage,
    AnimationPage
    
  },
  
  {
    initialRouteName: "Dashboard"
  }


);