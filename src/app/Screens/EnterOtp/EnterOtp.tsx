import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../Components/Header/Header';
import Otp from '../../Components/OTP/OTP';
import ResetPassword from '../ResetPassword/ResetPassword';

function EnterOtp() {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params as {email: string};

  const HandleVerify = () => {
    navigation.navigate('ResetPassword' as never);
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Enter Your OTP"
        subTitle={`Please check your email. We’ve sent a code to ${email}`}
      />
      <View style={styles.otpInputPosition}>
        <Otp />
      </View>
      <TouchableOpacity
        style={styles.verifyOtpButton}
        onPress={() => HandleVerify()}>
        <Text style={styles.verifyOtpButtonText}>Verify</Text>
        <RightArrowIcon
          name="arrow-right-long"
          size={30}
          color={'#FBFAF3'}></RightArrowIcon>
      </TouchableOpacity>
    </View>
  );
}

export default EnterOtp;
