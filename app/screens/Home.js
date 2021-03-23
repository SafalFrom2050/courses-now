import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import ArrowForward from 'react-native-eva-icons/icons/ArrowForward';
import FeaturedCarousel from '../views/FeaturedCarousel';

import Colors from '../config/colors';
import CommonStyles from '../config/common-styles';

export default function Home() {
  return (
    <View style={styles.container}>

      <View style={CommonStyles.iconView}>
        <Text styles={CommonStyles.iconText}>Featured</Text>
        <ArrowForward width={24} height={24} fill={Colors.backgroundText} />
      </View>

      <FeaturedCarousel style={styles.carousel} />
      <View style={CommonStyles.iconView}>
        <Text styles={CommonStyles.iconText}>Our Picks</Text>
        <ArrowForward width={24} height={24} fill={Colors.backgroundText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    flexGrow: 0,
    padding: 8,
  },
});
