import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';

const TrendingCard = memo(({data}) => {
  const navigation = useNavigation();
  // console.log('data is ---', data);
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => {
              navigation.navigate('ProductDetails', {
                image: item.photo,
                name: item.name,
                price: item.price,
                originalPrice: item.originalPrice,
                percentTag: item.percentTag,
              });
            }}>
            <Image source={item.photo} style={styles.image} />
            <Text style={styles.name}>
              {item && item.name && item.name.length < 10
                ? item.name
                : item.name.substring(0, 12).concat('...')}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
});

export default TrendingCard;

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,

  },
  
  image: {
    height: 190,
    width: 135,
    resizeMode: 'cover',
    margin:6,
  },
  price: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingBottom:5,
    fontSize: 15,
    fontWeight:'900',
    color: '#000',
  },
  name: {
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight:'bold',
    color: '#000',
  },
});
