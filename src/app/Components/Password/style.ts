import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  passwordInput: {
    width: scale(280),
    height: scale(50),
    backgroundColor: '#F3F2E9',
    fontSize: moderateScale(14),
    fontWeight: '600',
    borderRadius: 16,
    paddingLeft: 70,
  },
  passwordHeader: {
    fontSize: moderateScale(14),
    fontWeight: '800',
  },
  passwordIcon: {
    position: 'absolute',
    left: scale(16),
    top: '50%',
    transform: [{translateY: -18}], // Adjust the vertical alignment of the icon
    zIndex: 1,
  },
  showPasswordIcon: {
    position: 'absolute',
    right: scale(10),
    top: verticalScale(22),
    transform: [{translateY: -12}], // Adjust the vertical alignment of the icon
  },
});

export default styles;
