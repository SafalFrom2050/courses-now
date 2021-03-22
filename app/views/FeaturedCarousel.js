import React, { useState } from 'react';

import {
  View, Text, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import colors from '../config/colors';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function FeaturedCarausel({ style }) {
  const [featuredList, setFeaturedList] = useState([{
    name: 'Product Photography',
    author: 'Tom...',
    stars: 4.5,
    imageUrl: 'https://picsum.photos/1024/1024',
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
    name: 'IELTS Masterclass',
    author: 'Robert Jones',
    stars: 4.0,
    imageUrl: 'https://picsum.photos/720/720',
  },
  ]);

  return (
    <FlatList
      data={featuredList}
      style={style}
      renderItem={({ item }) => (
        <View style={styles.mainItemContainer} key={item.name}>
          <ImageBackground
            style={styles.imageContainer}
            imageStyle={styles.image}
            source={{ uri: item.imageUrl }}
          >
            <View style={styles.descriptionView}>
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.body}>
                  {`- By ${item.author}`}
                </Text>
              </View>
              <View>
                <Text style={styles.body}>{item.stars}</Text>
              </View>

            </View>
          </ImageBackground>
        </View>
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />

  );
}

const styles = StyleSheet.create({
  mainItemContainer: {
    height: '30%',
    width: windowWidth,
    paddingRight: 16,
  },
  imageContainer: {
    height: '100%',
    flexDirection: 'column-reverse',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primaryText,
    margin: 4,
  },
  body: {
    color: colors.primaryText,
    margin: 4,
  },
  descriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 12,
    backgroundColor: `${colors.primary}bb`,
  },
});
