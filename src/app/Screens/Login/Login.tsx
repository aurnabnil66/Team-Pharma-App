import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import ShowPasswordIcon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import GuestIcon from 'react-native-vector-icons/Feather';
import Header from '../../Components/Header/Header';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const TogglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
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
        <Text style={styles.emailHeader}>Email Address</Text>
        <View>
          <EmailIcon
            name="email"
            size={30}
            color={'#424242'}
            style={styles.emailIcon}></EmailIcon>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.emailInput}
            placeholder="Enter your email address..."
            placeholderTextColor="#424242"
            maxLength={25}
          />
        </View>
      </View>
      <View style={styles.password}>
        <Text style={styles.emailHeader}>Password</Text>
        <View>
          <PasswordIcon
            name="lock"
            size={30}
            color={'#424242'}
            style={styles.passwordIcon}></PasswordIcon>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!isPasswordVisible}
            style={styles.emailInput}
            placeholder="Enter your password..."
            placeholderTextColor="#424242"
            maxLength={35}
          />
          <TouchableOpacity
            onPress={TogglePasswordVisibility}
            style={styles.showPasswordIcon}>
            <ShowPasswordIcon
              name={isPasswordVisible ? 'eye' : 'eyeo'}
              size={28}
              color={'#E0E0E0'}
            />
          </TouchableOpacity>
        </View>
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

      <TouchableOpacity style={styles.guestButton}>
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
