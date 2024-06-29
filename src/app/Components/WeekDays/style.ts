import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAF3',
  },
  button: {
    width: scale(150),
    height: verticalScale(64),
    borderRadius: scale(16),
    borderWidth: scale(1),
    backgroundColor: '#F3F2E9',
    borderColor: '#CDCACA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
    marginEnd: scale(10),
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
  },
});

export default styles;
