import {View, TouchableOpacity, Text} from 'react-native';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import Stars from '../../../assets/stars';

function PasswordChanged() {
  const navigation = useNavigation();

  const HandleBackToLogin = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Stars />
      <Text style={styles.backToLoginMainTitle}>Password changed</Text>
      <Text style={styles.backToLoginSubTitle}>
        Your password has been changed succesfully
      </Text>
      <TouchableOpacity
        style={styles.backToLoginButton}
        onPress={() => HandleBackToLogin()}>
        <Text style={styles.backToLoginButtonText}>Back To Login</Text>
        <RightArrowIcon
          name="arrow-right-long"
          size={30}
          color={'#FBFAF3'}></RightArrowIcon>
      </TouchableOpacity>
    </View>
  );
}

export default PasswordChanged;
