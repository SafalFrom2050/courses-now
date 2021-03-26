import React, { useState, useRef } from 'react';

import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import { Icon } from 'react-native-eva-icons';

import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

import HomeListItem from './HomeListItem';

export default function HomeListChild({ categoryName, navigation }) {
  // Retrive from prop category when api is implemented
  const [listItems, setListItems] = useState([{
    name: 'Product Photography',
    author: 'Tom...',
    stars: 4.5,
    imageUrl: 'https://picsum.photos/1024/1024',
    price: 'Free',
  },
  {
    name: 'Programming using C++',
    author: 'Mark Henry',
    stars: 4.3,
    imageUrl: 'https://picsum.photos/1080/1080',
  },
  {
    name: 'IELTS Masterclass',
    author: 'Robert Jones',
    stars: 4.0,
    imageUrl: 'https://picsum.photos/720/720',
  },
  {
    name: 'IELTS Masterclass 2',
    author: 'Robert Jones',
    stars: 4.0,
    imageUrl: 'https://picsum.photos/720/720',
  },
  ]);

  const iconRef = useRef();
  const onIconPress = () => {
    iconRef.current.startAnimation();
    navigation.navigate('Category', { category: categoryName });
  };

  return (

    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={onIconPress}>
        <View style={CommonStyles.iconView}>
          <Text style={CommonStyles.categoryText}>{categoryName}</Text>

          <Icon ref={iconRef} name="arrow-forward" animation="shake" width={24} height={24} fill={Colors.backgroundText} />

        </View>
      </TouchableWithoutFeedback>
      <FlatList
        data={listItems}
        keyExtractor={(item) => item.name}
        style={styles.list}
        renderItem={({ item }) => (
          <HomeListItem item={item} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
    marginBottom: 12,
  },
});
