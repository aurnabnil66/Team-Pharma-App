import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFAF3',
  },
  image: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
  },
  button: {
    width: 343,
    height: 56,
    borderRadius: 16,
    top: 230,
    backgroundColor: '#045A6C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
