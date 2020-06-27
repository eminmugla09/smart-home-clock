import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Dashboard from "../screens/Dashboard";
import ClockPage from "../screens/ClockPage";
import TimerPage from "../screens/TimerPage";
import AlarmPage from "../screens/AlarmPage";
import WeatherPage from "../screens/WeatherPage";
import AnimationPage from "../screens/AnimationPage";
import Settings from "../screens/Settings";


export default createStackNavigator(
                
  {
    Dashboard,
    Settings,
    ClockPage,
    TimerPage,
    AlarmPage,
    WeatherPage,
    AnimationPage
    
  },
  
  {
    initialRouteName: "Dashboard"
  }


);
