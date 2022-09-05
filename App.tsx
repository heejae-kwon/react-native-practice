/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import 'react-native-gesture-handler';
import { StackActions } from 'react-navigation';
import { DataTable } from 'react-native-paper';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function HomeScreenHeader() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="비니버스"
        component={HomeScreenTab}
        options={{
          headerRight: () => (
            <View style={styles.row}>
              <Button
                onPress={() => { return "" }}
                title="알람"
              />
              <Button
                onPress={() => { return "" }}
                title="검색"
              />

            </View>
          )
        }}
      />
    </Stack.Navigator>
  )
}
function ImageSliderBox() {
  const images = [
    "https://facebook.github.io/react/img/logo_og.png",
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree" // Network image
  ]
  const { width } = Dimensions.get('window');
  return (
    <View>
      <SwiperFlatList showPagination>
        <Image style={{ flex: 1, width: width, height: 200 }} source={{ uri: images[1] }}></Image>
        <Image style={{ flex: 1, width: width, height: 200 }} source={{ uri: images[2] }}></Image>
      </SwiperFlatList>
    </View>
  )

}

function CategorySlider() {

  const { width, height } = Dimensions.get('window');
  return (
    <ScrollView horizontal={true} style={{ flex: 1 }}>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='wait'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='아우터'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='상의'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='하의'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='스커트'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 4, justifyContent: 'center' }}>
        <Button title='원피스'></Button>
      </View>
    </ScrollView>
  )

}
function NewItem() {

  return <View>
    <Text>이미지</Text>
    <Text>제목</Text>
    <Text>가격</Text>
  </View>
}
function NewItemRow() {

  return <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <NewItem />
    <NewItem />
    <NewItem />
  </View>
}
function NewItemList() {

  return <View>
    <View>
      <Text>
        방금 들어온 신상품
      </Text>
    </View>
    <View>
      <NewItemRow />
      <NewItemRow />
      <NewItemRow />
      <NewItemRow />
      <NewItemRow />
      <NewItemRow />
      <NewItemRow />
    </View>
  </View>
}

function HomeTab() {
  return <ScrollView>
    <ImageSliderBox />
    <CategorySlider />
    <NewItemList />
  </ScrollView>
}


function BrandCategorySlider() {

  const { width, height } = Dimensions.get('window');
  return <View style={{ flexDirection: 'row' }}>
    <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
      <Button title='전체'></Button>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
      <View style={{ width: width / 4, height: height / 8, justifyContent: 'center' }}>
        <Button title='전체'></Button>
      </View>
    </ScrollView>
  </View>
}
function BrandItem() {

  return <View>
    <Text>이미지</Text>
    <Text>제목</Text>
  </View>
}
function BrandList() {

  return <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <BrandItem />
    <BrandItem />
    <BrandItem />
    <BrandItem />
  </View>
}
function BrandCategory() {
  return <View>
    <Text>브랜드 이니셜</Text>
    <BrandList />
  </View>
}
function BrandTab() {


  return <ScrollView>
    <BrandCategorySlider />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
    <BrandCategory />
  </ScrollView>
}

function HotDealBrand() {

  return <View>
    <View style={{ flexDirection: 'row' }}>
      <Text>아이콘</Text>
      <Text>브랜드명</Text>
    </View>
    <View>
      <Text>이미지</Text>
    </View>
  </View>
}
function HotDealTab() {


  return <ScrollView>
    <View style={{ flexDirection: 'row' }}>
      <Text>아이콘</Text>
      <Text>각 스토어의 현재 세일 정보를 모아두었습니다.</Text>
    </View>
    <DataTable>
      <DataTable.Row>
        <HotDealBrand />
      </DataTable.Row>
      <DataTable.Row>
        <HotDealBrand />
      </DataTable.Row>
      <DataTable.Row>
        <HotDealBrand />
      </DataTable.Row>
      <DataTable.Row>
        <HotDealBrand />
      </DataTable.Row>
    </DataTable>
  </ScrollView>
}
function HomeScreenTab() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeTab}
        options={{ title: '홈' }}
      />
      <Tab.Screen
        name="brand"
        component={BrandTab}
        options={{ title: '브랜드' }}
      />
      <Tab.Screen
        name="hotdeal"
        component={HotDealTab}
        options={{ title: '핫딜' }}
      />

    </Tab.Navigator>
  );

}


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
    <View style={{ width: width / 4, height: height / 8, position: 'absolute', right: -50, zIndex: 1 }}>
      <Button title='ㄱ'></Button>
    </View>
  </View>
}
function StoreInfoList() {

  return <ScrollView>
    <DataTable>
      <DataTable.Row>
        <StoreInfo />
      </DataTable.Row>
    </DataTable>
  </ScrollView>
}
function StoreTab() {

  const Stack = createStackNavigator()
  return <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={StoreInfoList}
      options={{ headerTitle: (props) => <StoreTabCategorySlider /> }}
    />
  </Stack.Navigator>
}

function FavoriteTab() {
  const Stack = createStackNavigator()
  return <Stack.Navigator>
    <Stack.Screen
      name="Home"
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
function MyPageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>설정</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>설정</Text>
    </View>
  );
}
const App = () => {

  const BottomTab = createMaterialBottomTabNavigator()

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="home" component={HomeScreenHeader} options={{
          title: '홈'
        }} />
        <BottomTab.Screen name="store" component={StoreScreen} options={{ title: '스토어' }} />
        <BottomTab.Screen name="mypage" component={MyPageScreen} options={{ title: '마이페이지' }} />
        <BottomTab.Screen name="setting" component={SettingsScreen} options={{ title: '설정' }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },

});

export default App;
