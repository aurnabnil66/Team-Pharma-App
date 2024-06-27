import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useState} from 'react';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import GuestIcon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Header/Header';
import {useNavigation} from '@react-navigation/native';

import Email from '../../Components/Email/Email';
import Password from '../../Components/Password/Password';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');

  const HandleGuestLogin = () => {
    navigation.navigate('GuestLogin' as never);
  };

  const HandleSignUp = () => {
    navigation.navigate('SignUp' as never);
  };

  const HandleForgotPassword = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Log In"
        subTitle="Log in to access your personalized Medinest experience"
      />
      <View style={styles.email}>
        <Email email={email} setEmail={setEmail} />
      </View>
      <View style={styles.password}>
        <Password />
      </View>
      <TouchableOpacity style={styles.signInbutton}>
        <Text style={styles.signInbuttonText}>Sign In</Text>
        <RightArrowIcon
          name="arrow-right-long"
          size={30}
          color={'#FBFAF3'}></RightArrowIcon>
      </TouchableOpacity>
      <View style={styles.orPart}>
        <View style={styles.orHorizontalLine}></View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.orHorizontalLine}></View>
      </View>
      <TouchableOpacity
        style={styles.guestButton}
        onPress={() => HandleGuestLogin()}>
        <GuestIcon name="user" size={30} color={'#424242'}></GuestIcon>
        <Text style={styles.guestButtonText}>Continue as guest</Text>
      </TouchableOpacity>
      <View style={styles.askAboutAccount}>
        <Text style={styles.askAboutAccountText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => HandleSignUp()}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => HandleForgotPassword()}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
