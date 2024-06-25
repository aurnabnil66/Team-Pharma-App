import {Text, TextInput, View} from 'react-native';
import styles from './style';

function Otp() {
  return (
    <View>
      <View style={styles.otpPosition}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
        />
      </View>
    </View>
  );
}

export default Otp;
