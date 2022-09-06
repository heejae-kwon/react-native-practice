
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
import { Divider } from 'react-native-paper';





function KeyWordAlarmTab() {
  const { width } = Dimensions.get('window');
  return <View>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ width: width / 2, height: undefined }}>
        <Button title='키워드 등록하기'></Button>
      </View>
      <View style={{ width: width / 2, height: undefined }}>
        <Button title='삭제하기'></Button>
      </View>
    </View>
    <Divider />
    <View style={{ alignItems: 'center' }}>
      <Text>알림이 없습니다.
        다양한 키워드를 등록해 보세요.
      </Text>
    </View>
  </View>
}

function CollectionsTab() {

  return <ScrollView>
    <Text>찜 목록이 없습니다.</Text>
  </ScrollView>
}


function MyPageScreen() {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="keyword"
        component={KeyWordAlarmTab}
        options={{ title: '키워드 알림' }}
      />
      <Tab.Screen
        name="collections"
        component={CollectionsTab}
        options={{ title: '찜한 아이템' }}
      />

    </Tab.Navigator>
  );
}

export default MyPageScreen