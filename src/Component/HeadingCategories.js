import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeadingCategories = ({Heading}) => {
  return (
    <View>
      <Text style={styles.HeadingName}>{Heading}</Text>
    </View>
  );
};

export default HeadingCategories;

const styles = StyleSheet.create({
  HeadingName: {
    fontSize: 18,
    color: '#000',
    marginVertical:10,
    paddingHorizontal: 14,
    fontWeight:'900'
    // marginBottom: 10,
  },
});
