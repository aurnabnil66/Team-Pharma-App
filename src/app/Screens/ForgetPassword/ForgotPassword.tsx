import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../Components/Header/Header';
import Email from '../../Components/Email/Email';
import {useState} from 'react';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  [key: string]: undefined | {email: string};
};

type EnterOtpRouteProp = RouteProp<RootStackParamList, 'EnterOtp'>;

function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');

  const HandleResetPassword = () => {
    navigation.navigate('EnterOtp', {email});
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Forgot Password"
        subTitle="Enter your Email then we will send you OTP to reset new password."
      />
      <View style={styles.email}>
        <Email email={email} setEmail={setEmail} />
      </View>
      <TouchableOpacity
        style={styles.resetPasswordbutton}
        onPress={() => HandleResetPassword()}>
        <Text style={styles.resetPasswordbuttonText}>Reset Password</Text>
        <RightArrowIcon
          name="arrow-right-long"
          size={30}
          color={'#FBFAF3'}></RightArrowIcon>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;
