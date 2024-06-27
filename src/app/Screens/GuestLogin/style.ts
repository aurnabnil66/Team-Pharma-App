import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFAF3',
  },
  calendarIconPosition: {
    marginTop: verticalScale(100),
  },
  headingTitleText: {
    fontSize: moderateScale(14),
    fontWeight: '300',
    color: '#757575',
    alignSelf: 'center',
    marginTop: verticalScale(30),
  },
  subTitlePosition: {
    flexDirection: 'row',
  },
  subTitleText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
  },
  plusText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#0BAB7C',
  },
  addMedicineButtonPosition: {
    marginTop: verticalScale(90),
    marginLeft: scale(165),
  },
  addMedicineButton: {
    height: verticalScale(42),
    width: scale(162),
    borderRadius: scale(16),
    backgroundColor: '#045A6C',
  },
  addMedicineButtonProperties: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(12),
    gap: scale(10),
  },
  addMedicineText: {
    fontSize: moderateScale(15),
    fontWeight: '800',
    color: '#FBFAF3',
  },
});

export default styles;
