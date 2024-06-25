import {Text, TextInput, View} from 'react-native';
import styles from './style';
import EmailIcon from 'react-native-vector-icons/Fontisto';

interface EmailProps {
  email: string;
  setEmail: (email: string) => void;
}

const Email: React.FC<EmailProps> = ({email, setEmail}) => {
  return (
    <View>
      <Text style={styles.emailHeader}>Email Address</Text>
      <View>
        <EmailIcon
          name="email"
          size={30}
          color={'#424242'}
          style={styles.emailIcon}></EmailIcon>
        <TextInput
          value={email}
          onChangeText={setEmail}
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
  );
};

export default Email;
