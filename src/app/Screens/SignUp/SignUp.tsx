import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import Header from '../../Components/Header/Header';
import {useNavigation} from '@react-navigation/native';

import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import InstagramIcon from 'react-native-vector-icons/FontAwesome';

import FullName from '../../Components/FullName/FullName';
import Email from '../../Components/Email/Email';
import Password from '../../Components/Password/Password';
import {useState} from 'react';

function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');

  const HandleSignIn = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Sign Up For Free"
        subTitle="Let’s experience the joy of telehealth Medinest All In One App"
      />
      <View style={styles.fullName}>
        <FullName />
      </View>
      <View style={styles.email}>
        <Email email={email} setEmail={setEmail} />
      </View>
      <View style={styles.password}>
        <Password />
      </View>
      <TouchableOpacity style={styles.signUpbutton}>
        <Text style={styles.signUpbuttonText}>Sign Up</Text>
        <RightArrowIcon
          name="arrow-right-long"
          size={30}
          color={'#FBFAF3'}></RightArrowIcon>
      </TouchableOpacity>
      <View style={styles.SignUpWithPart}>
        <View style={styles.SignUpWithHorizontalLine}></View>
        <Text style={styles.SignUpWithText}>Sign Up With</Text>
        <View style={styles.SignUpWithHorizontalLine}></View>
      </View>

      <View style={styles.signUpWithIconsContainer}>
        <TouchableOpacity>
          <View style={styles.signUpWithIcons}>
            <FacebookIcon
              name="facebook"
              size={25}
              color={'#045A6C'}></FacebookIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signUpWithIcons}>
            <GoogleIcon name="google" size={25} color={'#045A6C'}></GoogleIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signUpWithIcons}>
            <InstagramIcon
              name="instagram"
              size={25}
              color={'#045A6C'}></InstagramIcon>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.askAboutAccount}>
        <Text style={styles.askAboutAccountText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => HandleSignIn()}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;
