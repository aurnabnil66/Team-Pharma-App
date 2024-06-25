import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBFAF3',
  },
  image: {
    width: 448,
    height: 250,
  },
  imageText: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 65,
  },
  loginHeader: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FBFAF3',
  },
  loginHeaderText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FBFAF3',
    alignSelf: 'center',
  },
  email: {
    marginTop: 70,
    flexDirection: 'column',
    gap: 9.53,
  },
  emailHeader: {
    fontSize: 13.25,
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
    width: 327,
    height: 53.39,
    backgroundColor: '#F3F2E9',
    fontSize: 15.25,
    fontWeight: '600',
    borderRadius: 16,
    paddingLeft: 70,
  },
  password: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 9.53,
  },
  passwordHeader: {
    fontSize: 13.25,
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
    width: 327,
    height: 53.39,
    backgroundColor: '#F3F2E9',
    fontSize: 15.25,
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
    marginTop: 50,
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
    marginTop: 25,
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
