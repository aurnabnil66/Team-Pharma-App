import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
import styles from './style';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

function AddManualMedicine() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <SecondaryHeader mainTitle="Add Manual Medicine " />
      </View>
      <View style={styles.medicineInputPosition}>
        <Text style={styles.medicineNameText}>Medicine Name:</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          style={styles.medicineInput}
          maxLength={10}
        />
      </View>
      <View style={styles.buttonPosition}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.buttonText}>Schedule Dosage</Text>
          <RightArrowIcon
            name="arrow-right-long"
            size={30}
            color={'#FBFAF3'}></RightArrowIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddManualMedicine;
