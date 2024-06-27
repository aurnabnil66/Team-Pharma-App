import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
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
