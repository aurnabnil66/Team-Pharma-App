import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAF3',
  },
  backToLoginMainTitle: {
    color: '#045A6C',
    fontSize: moderateScale(36),
    fontWeight: '800'
  },
  backToLoginSubTitle: {
    color: '#555555',
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  backToLoginButton: {
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
  backToLoginButtonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
});

export default styles;
