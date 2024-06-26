import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFAF3',
  },
  email: {
    marginTop: verticalScale(18),
    flexDirection: 'column',
    gap: scale(8),
  },
  emailHeader: {
    fontSize: moderateScale(14),
    fontWeight: '800',
    color: '#424242',
  },
  emailIcon: {
    position: 'absolute',
    left: scale(16),
    top: '50%',
    transform: [{translateY: -15}], // Adjust the vertical alignment of the icon
    zIndex: 1,
  },
  emailInput: {
    width: scale(280),
    height: scale(50),
    backgroundColor: '#F3F2E9',
    fontSize: moderateScale(14),
    fontWeight: '600',
    borderRadius: 16,
    paddingLeft: 70,
    color: '#424242',
  },
  password: {
    marginTop: verticalScale(15),
    flexDirection: 'column',
    gap: 9.53,
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
  signInbutton: {
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
  signInbuttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
  orPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(16),
    marginTop: verticalScale(18),
  },
  orText: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: '#555555',
  },
  orHorizontalLine: {
    height: verticalScale(2),
    width: scale(120),
    backgroundColor: '#BDBDBD',
  },
  guestButton: {
    width: scale(280),
    height: verticalScale(45),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#424242',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(12),
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  guestButtonText: {
    color: '#424242',
    fontSize: moderateScale(20),
  },
  askAboutAccount: {
    flexDirection: 'row',
    marginTop: verticalScale(16),
  },
  askAboutAccountText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    color: '#045A6C',
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginTop: verticalScale(10),
  },
});

export default styles;
