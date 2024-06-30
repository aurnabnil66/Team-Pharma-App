import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  daysNameText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(15),
  },
  button: {
    width: scale(37),
    height: verticalScale(22),
    borderRadius: scale(16),
    borderWidth: scale(1),
    backgroundColor: '#9BBDC4',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
    marginEnd: scale(8),
  },
  buttonText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
  nextButtonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    width: scale(320),
    height: verticalScale(56),
    borderRadius: scale(16),
    marginBottom: verticalScale(30),
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(16),
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
});

export default styles;
