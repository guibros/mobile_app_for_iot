// App drawer.js

import React from 'react';
import Paho from "paho-mqtt";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SettingScreen from './Screens/Setting';
import HistoryScreen from './Screens/History';
import HomeMQTT from './Screens/HomeMQTT';

const Drawer = createDrawerNavigator();

global.client = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);

export default function App() {
  

  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="mqtt">
          <Drawer.Screen name="mqtt" component={HomeMQTT} />
          <Drawer.Screen name="History" component={HistoryScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
 
 