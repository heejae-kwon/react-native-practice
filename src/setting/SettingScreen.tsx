
import React from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

function SettingScreenHeader() {

  return <View style={{ flexDirection: 'row' }}>
    <Text>ICON</Text>
    <Text>설정</Text>
  </View>
}

interface SettingTableProps {
  title: string,
  children?: React.ReactNode;
}
function SettingTable({ title, children }: SettingTableProps) {

  return <View>
    <Text>{title}</Text>
    {children}
  </View>
}

function SettingTableList() {

  return <ScrollView>
    <SettingTable title='나의 활동'>
      <Text>최근 본 상품</Text>
      <Divider />
      <Text>키워드 알림</Text>
      <Divider />
    </SettingTable>
    <SettingTable title='설정'>
      <Text>서비스 이용약관</Text>
      <Divider />
      <Text>개인정보 처리방침</Text>
      <Divider />
    </SettingTable>
    <SettingTable title='버전 정보'>
      <Text>현재 버전</Text>
      <Divider />
    </SettingTable>
  </ScrollView>
}

function SettingsScreen() {
  const Stack = createStackNavigator()
  return <Stack.Navigator>
    <Stack.Screen
      name="Setting"
      component={SettingTableList}
      options={{ headerTitle: () => <SettingScreenHeader /> }}
    />
  </Stack.Navigator>
}

export default SettingsScreen