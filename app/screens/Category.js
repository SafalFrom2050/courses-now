/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import commonStyles from '../config/common-styles';
import { default as ListGrid } from '../views/HomeListGrid';

export default function Category({ route, navigation }) {
  const { category, id } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: category });
  }, [category]);

  return (
    <View>

      <ListGrid />
    </View>
  );
}
