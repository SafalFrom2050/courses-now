import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import {
  View, Text, ImageBackground, StyleSheet, Dimensions,
} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Star from 'react-native-eva-icons/icons/Star';

import ArrowForward from 'react-native-eva-icons/icons/ArrowForward';

import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function FeaturedCarausel({ style }) {
  const [featuredList, setFeaturedList] = useState([{
    name: 'Product Photography',
    author: 'Tom...',
    stars: 4.5,
    imageUrl: 'https://picsum.photos/1024/1024',
    readingMaterials: 50,
    questionSets: 7,
  },
  {
    name: 'Programming using C++',
    author: 'Mark Henry',
    stars: 4.3,
    imageUrl: 'https://picsum.photos/1080/1080',
    readingMaterials: 20,
    questionSets: 2,
  },
  {
    name: 'IELTS Masterclass',
    author: 'Robert Jones',
    stars: 4.0,
    imageUrl: 'https://picsum.photos/1440/1440',
    readingMaterials: 5,
    questionSets: 6,
  },
  {
    name: 'IELTS Masterclass 2',
    author: 'Robert Jones',
    stars: 4.0,
    imageUrl: 'https://picsum.photos/1280/1280',
    readingMaterials: 67,
    questionSets: 1,
  },
  ]);

  const [pos, setPos] = useState(0);
  const indexRef = useRef(pos);
  indexRef.current = pos;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setPos(roundIndex);
    }
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 12, marginBottom: 16 }}>
      <View style={CommonStyles.iconView}>
        <Text style={CommonStyles.categoryText}>Featured</Text>
        <ArrowForward width={24} height={24} fill={Colors.backgroundText} />
      </View>
      <FlatList
        data={featuredList}
        style={style}
        decelerationRate="fast"
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.mainItemContainer}>
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
                <View style={CommonStyles.iconView}>
                  <Star width={20} height={20} fill="white" />
                  <Text style={styles.body}>{item.stars}</Text>
                </View>

              </View>
            </ImageBackground>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text style={CommonStyles.infoTextRoundBorder}>{`${featuredList[pos].readingMaterials} Reading Materials`}</Text>
        <Text style={CommonStyles.infoTextRoundBorder}>{`${featuredList[pos].questionSets} Question Sets`}</Text>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  mainItemContainer: {
    width: windowWidth,
    paddingRight: 16,
    marginBottom: 8,

  },
  imageContainer: {
    height: 200,
    flexDirection: 'column-reverse',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 12,

  },
  title: {
    fontSize: 22,
    fontFamily: 'OpenSans_700Bold',
    color: Colors.primaryText,
    margin: 4,
  },
  body: {
    color: Colors.primaryText,
    fontFamily: 'OpenSans_600SemiBold',
    margin: 4,
  },
  descriptionView: {
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 12,
    backgroundColor: `${Colors.primary}aa`,
  },
});
