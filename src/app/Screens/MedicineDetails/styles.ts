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
    width: 343,
    height: 56,
    borderRadius: 16,
    top: verticalScale(270),
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FBFAF3',
    fontSize: 20,
  },
});

export default styles;
