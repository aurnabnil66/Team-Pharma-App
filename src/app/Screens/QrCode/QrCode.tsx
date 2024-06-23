import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import QrScan from '../QrScan/QrScan';
import {useNavigation} from '@react-navigation/native';

function QrCode() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/qr-code-icon.png')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QrScan' as never)}>
        <Text style={styles.buttonText}>Let's Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

export default QrCode;
