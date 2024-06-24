import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

function MedicineDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login' as never)}>
        <Text style={styles.buttonText}>Schedule Dosage</Text>
        <Icon name="arrow-right-long" size={30} color={'#FBFAF3'}></Icon>
      </TouchableOpacity>
    </View>
  );
}

export default MedicineDetails;
