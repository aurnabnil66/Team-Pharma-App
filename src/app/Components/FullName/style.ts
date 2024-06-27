import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  header: {
    fontSize: moderateScale(14),
    fontWeight: '800',
    color: '#424242',
  },
  input: {
    width: scale(280),
    height: scale(50),
    backgroundColor: '#F3F2E9',
    fontSize: moderateScale(14),
    fontWeight: '600',
    borderRadius: scale(16),
    paddingLeft: scale(18),
    color: '#424242',
  },
});

export default styles;
