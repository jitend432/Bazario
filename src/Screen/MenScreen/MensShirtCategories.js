import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

const MensShirtCategories = () => {
  const MensCategory = [
    {
      id: 1,
      photo: require('../../../assets/MenAssets/MenShirt/2525.jpg'),
      name: 'Cotton',
      price: '₹ 1299',
    },
    {
      id: 2,
      photo: require('../../../assets/MenAssets/MenShirt/2424.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 999',
    },
    {
      id: 3,
      photo: require('../../../assets/MenAssets/MenShirt/2323.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 299',
    },
    {
      id: 4,
      photo: require('../../../assets/MenAssets/MenShirt/2222.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 199',
    },
    {
      id: 5,
      photo: require('../../../assets/MenAssets/MenShirt/1818.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 129',
    },
    {
      id: 6,
      photo: require('../../../assets/MenAssets/MenShirt/1616.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 199',
    },
    {
      id: 7,
      photo: require('../../../assets/MenAssets/MenShirt/1414.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 2299',
    },
    {
      id: 8,
      photo: require('../../../assets/MenAssets/MenShirt/1313.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 2299',
    },
    {
      id: 9,
      photo: require('../../../assets/MenAssets/MenShirt/1212.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 10,
      photo: require('../../../assets/MenAssets/MenShirt/10.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 11,
      photo: require('../../../assets/MenAssets/MenShirt/8.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 12,
      photo: require('../../../assets/MenAssets/MenShirt/7.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 13,
      photo: require('../../../assets/MenAssets/MenShirt/5.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 14,
      photo: require('../../../assets/MenAssets/MenShirt/3.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 15,
      photo: require('../../../assets/MenAssets/MenTshirt/1111.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 16,
      photo: require('../../../assets/MenAssets/MenTshirt/1010.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 17,
      photo: require('../../../assets/MenAssets/MenTshirt/99.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 18,
      photo: require('../../../assets/MenAssets/MenTshirt/88.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 19,
      photo: require('../../../assets/MenAssets/MenTshirt/77.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 20,
      photo: require('../../../assets/MenAssets/MenTshirt/66.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 21,
      photo: require('../../../assets/MenAssets/MenTshirt/44.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 22,
      photo: require('../../../assets/MenAssets/MenTshirt/33.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 23,
      photo: require('../../../assets/MenAssets/MenTshirt/5.jpg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
    {
      id: 24,
      photo: require('../../../assets/MenAssets/MenTshirt/6.jpeg'),
      name: 'Cotton Waist Shirt with jokesrs noken',
      price: '₹ 339',
    },
  ];
  return (
    <View style={styles.MainContainer}>
      <FlatList
        data={MensCategory}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.CardContainer} key={item.id}>
            <View style={styles.Card}>
              <View style={styles.ImgContainer}>
                <Image source={item.photo} style={styles.Img} />
              </View>
              <View style={styles.DescriptionContainer}>
                <Text style={styles.name}>
                  {item.name && item.name.length > 13
                    ? item.name.substring(0, 15).concat('...')
                    : item.name}
                </Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MensShirtCategories;

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  CardContainer: {
    width: screenWidth / 2 - 1.4, // Adjust width to fit 2 columns
    margin: 0.9,
  },
  Card: {
    backgroundColor: '#ffffff',
  },
  ImgContainer: {
    alignItems: 'center',
  },
  DescriptionContainer: {
    padding: 10,
    paddingHorizontal: 14,
  },
  Img: {
    height: 195,
    width: '100%',
    resizeMode: 'stretch',
  },
  name: {
    fontSize: 15,
    color: '#000',
    fontWeight:'bold'
  },
  price: {
    fontSize: 15,
    fontWeight:'900',
    color: '#000',
    //fontWeight: 'bold',
  },
});
