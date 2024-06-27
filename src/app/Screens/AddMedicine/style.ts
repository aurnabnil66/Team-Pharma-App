import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFAF3',
  },
  textOnTopPosition: {
    marginRight: scale(40),
    marginTop: verticalScale(25),
  },
  textOnTop: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
  },
  tinyQrCodeIconPosition: {
    marginTop: verticalScale(80),
  },
  button: {
    width: scale(280),
    height: verticalScale(45),
    borderRadius: 16,
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(12),
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  buttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(18),
  },
  horizontalLine: {
    backgroundColor: '#9BBDC4',
    height: verticalScale(1),
    width: scale(375),
    marginTop: verticalScale(60),
  },
  textIconOutlinePosition: {
    marginTop: verticalScale(50),
  },
});

export default styles;
