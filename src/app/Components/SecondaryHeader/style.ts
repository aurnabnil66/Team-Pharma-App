import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  header: {
    width: scale(350),
    height: verticalScale(140),
    backgroundColor: '#4F8C98',
    borderBottomLeftRadius: 30, // Adjust radius as needed
    borderBottomRightRadius: 30, // Adjust radius as needed
  },
  headerText: {
    width: scale(343),
    marginTop: verticalScale(90),
    marginLeft: scale(20),
  },
  headerMainTitle: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: '#FBFAF3',
  },
});

export default styles;
