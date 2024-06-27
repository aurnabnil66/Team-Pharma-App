import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './style';
import PlusIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

function AddMedicineButton() {
  const navigation = useNavigation();

  const HandleAddMedicine = () => {
    navigation.navigate('AddMedicine' as never);
  };
  return (
    <TouchableOpacity
      style={styles.addMedicineButton}
      onPress={() => HandleAddMedicine()}>
      <View style={styles.addMedicineButtonProperties}>
        <PlusIcon name="plus" size={22} color={'#FBFAF3'}></PlusIcon>
        <Text style={styles.addMedicineText}>Add Medicine</Text>
      </View>
    </TouchableOpacity>
  );
}

export default AddMedicineButton;
