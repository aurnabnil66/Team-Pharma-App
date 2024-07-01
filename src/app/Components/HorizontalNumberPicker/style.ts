import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(66),
    marginTop: verticalScale(70),
  },
  itemText: {
    fontSize: moderateScale(18),
    color: '#045A6C',
    fontWeight: '700',
  },
  nextButtonPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    width: scale(320),
    height: verticalScale(56),
    borderRadius: scale(16),
    marginBottom: verticalScale(30),
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(16),
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(20),
  },
});

export default styles;
