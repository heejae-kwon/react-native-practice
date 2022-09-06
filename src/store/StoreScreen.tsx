
import 'react-native-gesture-handler';
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Divider } from 'react-native-paper';

function StoreTabCategorySlider() {
  const { width, height } = Dimensions.get('window');

  return <View style={{ flexDirection: 'row' }}>
    <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
      <Button title='전체'></Button>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='ㄱ'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='ㄴ'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='ㄷ'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='ㄹ'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='ㅁ'></Button>
      </View>
    </ScrollView>
  </View>
}
function StoreInfo() {
  const { width, height } = Dimensions.get('window');

  return <View style={{ flexDirection: 'row', position: 'relative' }}>
    <View>
      <Text>Icon</Text>
    </View>
    <View>
      <Text>스토어명</Text>
      <Text>스토어정sdsfdfsdfs보ㅜㅜㅜsdsdssdfsdfsdfsdfsdfa</Text>
    </View>
    <View style={{ width: width / 4, height: height / 8, position: 'absolute', right: 0, zIndex: 1 }}>
      <Button title='ㄱ'></Button>
    </View>
  </View>
}
function StoreInfoList() {

  return <ScrollView>
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
    <Divider />
    <StoreInfo />
  </ScrollView>
}
function StoreTab() {

  const Stack = createStackNavigator()
  return <Stack.Navigator>
    <Stack.Screen
      name="List"
      component={StoreInfoList}
      options={{ headerTitle: () => <StoreTabCategorySlider /> }}
    />
  </Stack.Navigator>
}

function FavoriteTab() {
  const Stack = createStackNavigator()
  return <Stack.Navigator>
    <Stack.Screen
      name="Favor"
      component={StoreInfoList}
      options={{ title: '즐겨찾는 스토어' }}
    />
  </Stack.Navigator>
}
function StoreScreen() {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="store"
        component={StoreTab}
        options={{ title: '스토어' }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteTab}
        options={{ title: '즐겨찾기' }}
      />

    </Tab.Navigator>
  );
}


export default StoreScreen