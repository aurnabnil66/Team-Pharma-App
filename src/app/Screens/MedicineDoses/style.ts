import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAF3',
  },
  headerAndProgressBarPosition: {
    alignItems: 'center',
    flex: 2,
  },
  doseItemsPosition: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
  },
  buttonPositions: {
    marginTop: verticalScale(20),
  },
  progressBarPosition: {
    marginTop: -7,
    borderWidth: 0,
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
  selectedDaysHeaderText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#045A6C',
    marginTop: verticalScale(15),
    marginRight: scale(145),
  },
  selectedDaysContainer: {
    flexWrap: 'wrap',
    gap: 1,
  },
  scrollViewContainer: {
    width: '90%',
    maxHeight: '100%',
  },
  selectedDaysViewButton: {
    height: verticalScale(29),
    width: scale(77),
    backgroundColor: '#9BBDC4',
    borderRadius: scale(16),
  },
  selectedDaysViewButtonText: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: '#424242',
    alignSelf: 'center',
    marginTop: verticalScale(5),
  },
  selectedDaysList: {
    marginRight: moderateScale(90),
  },
});

export default styles;
