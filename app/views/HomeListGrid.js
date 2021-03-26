import React, { useState } from 'react';

import {
  View, Image, Text, StyleSheet, Dimensions, TouchableNativeFeedback,
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';

import Star from 'react-native-eva-icons/icons/Star';

import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function HomeListGrid() {
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

  return (
    <View>
      <FlatList
        data={listItems}
        keyExtractor={(item) => item.name}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(Colors.rippleColor, false)}
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
        )}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,

  },
  container: {
    flex: 1,
    margin: 8,
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
    color: Colors.backgroundTextFocus,
    fontSize: 16,
    height: 40,
    width: 120,
  },
  author: {
    margin: 4,
    color: Colors.backgroundText,
    fontSize: 12,
    width: 120,
  },
  stars: {
    margin: 4,
    color: Colors.backgroundTextFocus,
    fontSize: 10,
    fontWeight: 'bold',
    width: 120,
  },

});
