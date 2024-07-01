import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  button: {
    padding: verticalScale(10),
    backgroundColor: '#045A6C',
    borderRadius: scale(5),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(16),
    padding: verticalScale(20),
    alignItems: 'center',
    width: scale(300), // Adjust width as needed
    height: verticalScale(450), // Adjust height as needed
  },
  cancelAndOKbuttonPosition: {
    flexDirection: 'row',
    marginLeft: scale(120),
  },
  cancelAndOKbutton: {
    marginTop: verticalScale(10),
    padding: verticalScale(10),
    borderRadius: scale(5),
  },
  cancelAndOKButtonText: {
    color: '#045A6C',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  selectedDaysContainer: {
    marginTop: verticalScale(10),
    padding: verticalScale(10),
    borderRadius: scale(5),
    overflow: 'scroll',
    flexDirection: 'column',
  },
  selectedDaysHeaderText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#045A6C',
    marginTop: verticalScale(15),
    marginRight: scale(145),
  },
  selectedDaysTextPosition: {
    flexDirection: 'row',
    marginTop: verticalScale(-15),
    marginRight: scale(180),
  },
  selectedDaysText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
  },
  horizontalLine: {
    height: verticalScale(1),
    width: scale(242),
    marginTop: verticalScale(10),
    backgroundColor: '#9BBDC4',
  },
});

export default styles;
