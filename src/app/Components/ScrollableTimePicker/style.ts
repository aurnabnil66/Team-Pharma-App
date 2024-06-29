import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  timePickerPosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
