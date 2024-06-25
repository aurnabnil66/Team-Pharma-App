import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  header: {
    fontSize: moderateScale(14),
    fontWeight: '800',
  },
  otpPosition: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  otpText: {
    width: scale(74),
    height: scale(107),
    backgroundColor: '#F3F2E9',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: moderateScale(50),
    fontWeight: '800',
    color: '#212121',
    borderRadius: 30,
  },
});

export default styles;
