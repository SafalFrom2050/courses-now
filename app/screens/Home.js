import React from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';

import FeaturedCarousel from '../views/HomeFeaturedCarousel';
import { default as ListParent } from '../views/HomeListParent';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <FlatList
        data={null}
        ListHeaderComponent={<FeaturedCarousel style={styles.carousel} />}
        ListFooterComponent={<ListParent navigation={navigation} />}
      />

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
