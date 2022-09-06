import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';


function HomeScreen() {
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
    <HotDealBrand />
    <Divider />
    <HotDealBrand />
    <Divider />
    <HotDealBrand />
    <Divider />
    <HotDealBrand />
    <Divider />
  </ScrollView>
}
function HomeScreenTab() {

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
  }
})

export default HomeScreen