import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function CourseLanding({ route, navigation }) {
  const { courseName, id } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: courseName });
  }, [courseName]);

  return (
    <View>
      <Text />
    </View>
  );
}
