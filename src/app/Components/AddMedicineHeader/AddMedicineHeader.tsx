import {Text, View} from 'react-native';
import styles from './style';

interface IAddMedicineHeaderProps {
  mainTitle: String;
}

const AddMedicineHeader = (HearderProps: IAddMedicineHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.headerMainTitle}>{HearderProps.mainTitle}</Text>
      </View>
    </View>
  );
};

export default AddMedicineHeader;
