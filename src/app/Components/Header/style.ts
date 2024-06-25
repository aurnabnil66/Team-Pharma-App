import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  header: {
    width: scale(375),
    height: verticalScale(209),
    backgroundColor: '#4F8C98',
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
  },
  headerText: {
    flexDirection: 'column',
    alignItems: 'center',
    width: scale(343),
    marginTop: verticalScale(70),
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  headerMainTitle: {
    fontSize: moderateScale(36),
    fontWeight: '800',
    color: '#FBFAF3',
    marginBottom: verticalScale(5),
  },
  headerSubTitle: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: '#FBFAF3',
    textAlign: 'center',
  },
});

export default styles;
