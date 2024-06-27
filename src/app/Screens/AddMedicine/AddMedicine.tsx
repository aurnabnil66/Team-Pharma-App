import {Text, TouchableOpacity, View} from 'react-native';
import AddMedicineHeader from '../../Components/AddMedicineHeader/AddMedicineHeader';
import styles from './style';
import TinyQrCodeIcon from '../../../assets/tiny-qr-code-icon';
import TextIconOutline from '../../../assets/text-icon-outline';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

function AddMedicine() {
  const navigation = useNavigation();

  const HandleBarCode = () => {
    navigation.navigate('QrScan' as never);
  };

  const HandleAddManually = () => {
    navigation.navigate('AddManualMedicine' as never);
  };

  return (
    <View style={styles.container}>
      <View>
        <AddMedicineHeader mainTitle="Add Medicine" />
      </View>
      <View style={styles.textOnTopPosition}>
        <Text style={styles.textOnTop}>
          How do you want to add your medicine?
        </Text>
      </View>
      <View style={styles.tinyQrCodeIconPosition}>
        <TinyQrCodeIcon />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => HandleBarCode()}>
          <Text style={styles.buttonText}>Scan Barcode</Text>
          <RightArrowIcon
            name="arrow-right-long"
            size={30}
            color={'#FBFAF3'}></RightArrowIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.textIconOutlinePosition}>
        <TextIconOutline />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleAddManually()}>
          <Text style={styles.buttonText}>Add Manually</Text>
          <RightArrowIcon
            name="arrow-right-long"
            size={30}
            color={'#FBFAF3'}></RightArrowIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddMedicine;
