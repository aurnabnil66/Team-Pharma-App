import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  emailInput: {
    width: scale(280),
    height: scale(50),
    backgroundColor: '#F3F2E9',
    fontSize: moderateScale(14),
    fontWeight: '600',
    borderRadius: 16,
    paddingLeft: 70,
  },
  emailHeader: {
    fontSize: moderateScale(14),
    fontWeight: '800',
  },
  emailIcon: {
    position: 'absolute',
    left: scale(16),
    top: '50%',
    transform: [{translateY: -15}], // Adjust the vertical alignment of the icon
    zIndex: 1,
  },
});

export default styles;
