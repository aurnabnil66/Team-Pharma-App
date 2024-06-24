import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome6';

function MedicineDetails() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Schedule Dosage</Text>
        <Icon name="arrow-right-long" size={30} color={'#FBFAF3'}></Icon>
      </TouchableOpacity>
    </View>
  );
}

export default MedicineDetails;
