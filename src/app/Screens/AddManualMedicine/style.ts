import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFAF3',
  },
  medicineInputPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(15),
    marginTop: verticalScale(25),
  },
  medicineNameText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: '#424242',
  },
  medicineInput: {
    width: scale(139),
    height: scale(42),
    borderColor: '#CDCACA',
    borderWidth: scale(1),
    fontSize: moderateScale(16),
    fontWeight: '600',
    borderRadius: scale(16),
    paddingLeft: scale(16),
    color: '#424242',
    textAlign: 'center',
  },
  buttonPosition: {
    marginTop: verticalScale(340),
  },
  button: {
    width: scale(280),
    height: verticalScale(45),
    borderRadius: 16,
    backgroundColor: '#045A6C',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: scale(12),
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  buttonText: {
    color: '#FBFAF3',
    fontSize: moderateScale(18),
  },
});

export default styles;
