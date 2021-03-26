import React, { useState, useRef } from 'react';

import {
  View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-eva-icons';
import { default as ListChild } from './HomeListChild';

import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

export default function HomeListParent({ navigation }) {
  const [categories, setCategories] = useState([
    {
      name: 'Our Picks',
      id: 1,
    },
    {
      name: 'Programming',
      id: 10,
    },
    {
      name: 'English',
      id: 2,
    },
    {
      name: 'Astronomy',
      id: 3,
    },
    {
      name: 'Photography',
      id: 4,
    },
  ]);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>

          <ListChild id={item.id} categoryName={item.name} navigation={navigation} />

        </View>
      )}
    />

  );
}
