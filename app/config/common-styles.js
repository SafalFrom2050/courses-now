import { OpenSans_300Light, OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    margin: 4,
    fontFamily: 'OpenSans_600SemiBold',
  },
  categoryText: {
    margin: 8,
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
  },
  infoTextRoundBorder: {
    margin: 4,
    padding: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    borderColor: Colors.primaryBorder,
    borderRadius: 999,
    fontSize: 13,
    fontFamily: 'OpenSans_300Light',
  },
});
