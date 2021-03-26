import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';

import Star from 'react-native-eva-icons/icons/Star';
import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

export default function HomeListItem({ item, onItemClick }) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(Colors.rippleColor, false)}
      onPress={onItemClick}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.author}>
          {`- By ${item.author}`}
        </Text>
        <View style={CommonStyles.iconView}>
          <Star width={16} height={16} fill={Colors.backgroundText} />
          <Text style={styles.stars}>{item.stars}</Text>
        </View>

      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 8,
    width: 'auto',
  },
  image: {
    marginBottom: 4,
    resizeMode: 'cover',
    height: 120,
    width: 120,
    borderRadius: 12,
  },
  name: {
    margin: 4,
    fontFamily: 'OpenSans_600SemiBold',
    color: Colors.backgroundTextFocus,
    fontSize: 16,
    width: 120,
    height: 44,
  },
  author: {
    margin: 4,
    fontFamily: 'OpenSans_400Regular',
    color: Colors.backgroundText,
    fontSize: 12,
  },
  stars: {
    margin: 4,
    color: Colors.backgroundTextFocus,
    fontSize: 10,
    fontWeight: 'bold',
  },

});
