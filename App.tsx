/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './src/home/HomeScreen';
import StoreScreen from './src/store/StoreScreen';
import MyPageScreen from './src/my-page/MyPageScreen';
import SettingsScreen from './src/setting/SettingScreen';
import ImageCanvas from './src/imageCanvas';




const App = () => {

  const BottomTab = createMaterialBottomTabNavigator()

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="home" component={ImageCanvas} options={{
          title: '홈'
        }} />
        <BottomTab.Screen name="store" component={StoreScreen} options={{ title: '스토어' }} />
        <BottomTab.Screen name="mypage" component={MyPageScreen} options={{ title: '마이페이지' }} />
        <BottomTab.Screen name="setting" component={SettingsScreen} options={{ title: '설정' }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};


export default App;
