import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../Components/Header/Header';
import Otp from '../../Components/OTP/OTP';

function EnterOtp() {
  const navigation = useNavigation();
  const route = useRoute();
  const {email} = route.params as {email: string};
  let otpRef: any = null; // Use to call the clearOtp method in Otp component

  const handleVerify = () => {
    otpRef.clearOtp(); // Clear the OTP inputs and blur all input fields
    navigation.navigate('ResetPassword' as never);
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Enter Your OTP"
        subTitle={`Please check your email. We’ve sent a code to ${email}`}
      />
      <View style={styles.otpInputPosition}>
        <Otp ref={ref => (otpRef = ref)} />
      </View>
      <TouchableOpacity style={styles.verifyOtpButton} onPress={handleVerify}>
        <Text style={styles.verifyOtpButtonText}>Verify</Text>
        <RightArrowIcon name="arrow-right-long" size={30} color={'#FBFAF3'} />
      </TouchableOpacity>
    </View>
  );
}

export default EnterOtp;
