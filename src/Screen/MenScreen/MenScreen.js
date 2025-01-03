import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Carousal from '../../Carousel/Carousal';
import TrendingCard from '../../Component/TrendingCards/TrendingCard';
import Category from '../../Component/Category';
import Category2 from '../../Component/category2';
import Category3 from '../../Component/categories3';

const MenScreen = () => {
  const bannerImages = [
    require('../../../assets/MenAssets/MensBanners/4.jpg'),
    require('../../../assets/MenAssets/MensBanners/3.jpg'),
    require('../../../assets/MenAssets/MensBanners/2.jpg'),
    require('../../../assets/MenAssets/MensBanners/1.jpeg'),
  ];

  const T_Shirt = [
    {
      name: 'Shirts',
      photo: require('../../../assets/MenAssets/MenShirt/3.jpg'),
    },
  ];

  const Jeans = [
    {
      name: 'Jeans',
      photo: require('../../../assets/MenAssets/Mens_Jeans/1.jpg'),
    },
  ];
  const Shoes = [
    {
      name: 'Footwears',
      photo: require('../../../assets/MenAssets/Men_Shoes/5.jpg'),
    },
  ];
  return (
    <ScrollView>
      <View style={{}}>
        <Carousal bannerImages={bannerImages} />
      </View>
      <View style={{marginTop:5}}>
        
        <LinearGradient colors={['#603813', '#b29f94']}>
        <Category categories={T_Shirt} handlePress={'4'} flexD={'1'} />
        </LinearGradient>
        <LinearGradient colors={['#975959', '#f39cca', '#f39cca']}>
        <Category categories={Jeans} handlePress={'5'} flexD={'2'} />
        </LinearGradient>
        <LinearGradient colors={['#975959', '#f39cca', '#f39cca']}>
        <Category categories={Shoes} handlePress={'6'} flexD={'3'} />
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default MenScreen;

const styles = StyleSheet.create({});
