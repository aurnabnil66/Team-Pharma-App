import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAF3',
  },
  button: {
    width: scale(320),
    height: verticalScale(56),
    borderRadius: scale(16),
    top: verticalScale(270),
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(16),
    alignItems: 'center',
  },
  buttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
});

export default styles;
