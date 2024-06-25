import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import ShowPasswordIcon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

function Password() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const TogglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <Text style={styles.passwordHeader}>Password</Text>
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
          style={styles.passwordInput}
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
  );
}

export default Password;
