import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  calendarBox: {
    height: verticalScale(105),
    width: scale(325),
    borderRadius: scale(10),
    backgroundColor: '#9BBDC4',
    marginTop: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthYear: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#424242',
    marginLeft: scale(13),
  },
  navButtons: {
    flexDirection: 'row',
  },
  navButton: {
    fontSize: moderateScale(28),
    marginHorizontal: verticalScale(10),
    color: '#424242',
    marginRight: scale(18),
  },
  weekContainer: {
    flexDirection: 'row',
  },
  dayContainer: {
    width: scale(46.5),
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(16),
  },
  selectedDay: {
    backgroundColor: '#045A6C',
  },
  dayText: {
    fontSize: moderateScale(12),
    fontWeight: '300',
    color: '#424242',
  },
  dateText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: '#424242',
  },
  selectedDayText: {
    color: '#fff',
  },
});

export default styles;
