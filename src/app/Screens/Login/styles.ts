import {ScaledSheet} from 'react-native-size-matters';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFAF3',
  },
  image: {
    width: '375@s',
    height: verticalScale(209),
  },
  imageText: {
    flexDirection: 'column',
    alignItems: 'center',
    width: scale(343),
    marginTop: verticalScale(70),
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  loginHeader: {
    fontSize: moderateScale(36),
    fontWeight: '800',
    color: '#FBFAF3',
    marginBottom: verticalScale(5),
  },
  loginHeaderText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#FBFAF3',
    textAlign: 'center',
  },
  email: {
    marginTop: verticalScale(20),
    flexDirection: 'column',
    gap: 9.53,
  },
  emailHeader: {
    fontSize: scale(13.25),
    fontWeight: '800',
  },
  emailIcon: {
    position: 'absolute',
    left: 20,
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
  },
  password: {
    marginTop: verticalScale(15),
    flexDirection: 'column',
    gap: 9.53,
  },
  passwordHeader: {
    fontSize: scale(13.25),
    fontWeight: '800',
  },
  passwordIcon: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{translateY: -18}], // Adjust the vertical alignment of the icon
    zIndex: 1,
  },
  passwordInput: {
    width: scale(280),
    height: scale(50),
    backgroundColor: '#F3F2E9',
    fontSize: moderateScale(14),
    fontWeight: '600',
    borderRadius: 16,
    paddingLeft: 70,
  },
  showPasswordIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -12}], // Adjust the vertical alignment of the icon
  },
  signInbutton: {
    width: 343,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center',
    marginTop: 25,
  },
  signInbuttonText: {
    color: '#FBFAF3',
    fontSize: 20,
  },
  orPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginTop: verticalScale(10),
  },
  orText: {
    fontSize: 18,
    fontWeight: '400',
  },
  orHorizontalLine: {
    height: 2,
    width: 139,
    backgroundColor: '#BDBDBD',
  },
  guestButton: {
    width: 343,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#424242',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  guestButtonText: {
    color: '#424242',
    fontSize: 20,
  },
  askAboutAccount: {
    flexDirection: 'row',
    marginTop: 25,
  },
  askAboutAccountText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#424242',
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '600',
    color: '#424242',
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    color: '#045A6C',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
  },
});

export default styles;
