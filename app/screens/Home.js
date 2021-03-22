import React from 'react';
import { View, StyleSheet } from 'react-native';

import FeaturedCarousel from '../views/FeaturedCarousel';

export default function Home() {
  return (
    <View style={styles.container}>
      <FeaturedCarousel style={styles.carousel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {

    padding: 8,
  },
});
