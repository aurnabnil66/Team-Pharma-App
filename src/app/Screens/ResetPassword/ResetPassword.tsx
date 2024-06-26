import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Header from '../../Components/Header/Header';
import ConfirmPassword from '../../Components/ConfirmPassword/ConfirmPassword';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

function ResetPassword() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const HandleResetPassword = () => {
    if (newPassword === confirmPassword) {
      navigation.navigate('PasswordChanged' as never);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        mainTitle="Reset Password"
        subTitle="Please type something you’ll remember"
      />
      <View style={styles.confirmPassword}>
        <ConfirmPassword
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
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

export default ResetPassword;
