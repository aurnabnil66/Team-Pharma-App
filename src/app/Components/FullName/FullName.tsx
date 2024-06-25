import {Text, TextInput, View} from 'react-native';
import styles from './style';

function FullName() {
  return (
    <View>
      <Text style={styles.header}>Full Name</Text>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          style={styles.input}
          placeholder="Enter your full name..."
          placeholderTextColor="#424242"
          maxLength={25}
        />
      </View>
    </View>
  );
}

export default FullName;
