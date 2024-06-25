import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import PasswordIcon from 'react-native-vector-icons/SimpleLineIcons';
import ShowPasswordIcon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

interface ConfirmPasswordProps {
  newPassword: string;
  setNewPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
}

function ConfirmPassword({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
}: ConfirmPasswordProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const TogglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      <View>
        <Text style={styles.passwordHeader}>New Password</Text>
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
            placeholder="must be 8 characters"
            placeholderTextColor="#424242"
            maxLength={8}
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
      <View style={styles.confirmPasswordPosition}>
        <Text style={styles.passwordHeader}>Confirm New Password</Text>
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
            placeholder="repeat password"
            placeholderTextColor="#424242"
            maxLength={8}
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
    </View>
  );
}

export default ConfirmPassword;
