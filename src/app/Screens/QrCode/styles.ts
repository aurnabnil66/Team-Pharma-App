import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAF3',
  },
  image: {
    width: scale(270),
    height: verticalScale(270),
    resizeMode: 'contain',
  },
  button: {
    width: 343,
    height: 56,
    borderRadius: 16,
    top: verticalScale(100),
    backgroundColor: '#045A6C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FBFAF3',
    fontSize: 20,
  },
});

export default styles;
