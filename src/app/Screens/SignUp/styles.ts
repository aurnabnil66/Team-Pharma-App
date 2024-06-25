import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFAF3',
  },
  fullName: {
    marginTop: verticalScale(18),
    flexDirection: 'column',
    gap: scale(8),
  },
  email: {
    marginTop: verticalScale(18),
    flexDirection: 'column',
    gap: scale(8),
  },
  password: {
    marginTop: verticalScale(15),
    flexDirection: 'column',
    gap: 9.53,
  },
  signUpbutton: {
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
  signUpbuttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
  SignUpWithPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(16),
    marginTop: verticalScale(18),
  },
  SignUpWithText: {
    fontSize: moderateScale(18),
    fontWeight: '400',
  },
  SignUpWithHorizontalLine: {
    height: verticalScale(2),
    width: scale(80),
    backgroundColor: '#BDBDBD',
  },
  signUpWithIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: verticalScale(8),
  },
  signUpWithIcons: {
    height: scale(56),
    width: scale(56),
    borderWidth: scale(1.5),
    borderRadius: scale(20),
    borderColor: '#045A6C',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  askAboutAccount: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  askAboutAccountText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
  signInText: {
    textDecorationLine: 'underline',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
});

export default styles;
