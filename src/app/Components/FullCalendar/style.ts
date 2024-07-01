import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: scale(16),
    padding: verticalScale(12),
    alignItems: 'center',
    width: scale(300), // Adjust width as needed
    height: verticalScale(440), // Adjust height as needed
  },
  cancelAndOKbuttonPosition: {
    flexDirection: 'row',
    position: 'absolute',
    left: scale(175),
    gap: scale(14),
    marginTop: verticalScale(400),
  },
  cancelAndOKButtonText: {
    color: '#045A6C',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  selectedDaysContainer: {
    marginTop: verticalScale(5),
    borderRadius: scale(5),
    flexDirection: 'row',
    marginLeft: scale(8),
  },
  selectedDaysTextWrapper: {
    alignItems: 'flex-start',
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
  selectedDaysList: {
    maxHeight: moderateScale(70), // Adjust this value as needed
  },
  horizontalLine: {
    height: verticalScale(1),
    width: scale(242),
    marginTop: verticalScale(10),
    backgroundColor: '#9BBDC4',
  },
});

export default styles;
