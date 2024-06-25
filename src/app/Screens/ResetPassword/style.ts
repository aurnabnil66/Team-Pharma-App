import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFAF3',
  },
  confirmPassword: {
    marginTop: verticalScale(18),
    flexDirection: 'column',
    gap: scale(8),
  },
  resetPasswordbutton: {
    width: scale(280),
    height: verticalScale(45),
    borderRadius: 16,
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(12),
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  resetPasswordbuttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
});

export default styles;
