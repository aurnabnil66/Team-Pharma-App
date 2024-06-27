import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import HorizontalCalendar from '../../Components/HorizontalCalender/HorizontalCalendar';
import CalendarIcon from '../../../assets/calender-icon';
import PlusIcon from 'react-native-vector-icons/Feather';

function GuestLogin() {
  return (
    <View style={styles.container}>
      <View>
        <HorizontalCalendar />
      </View>
      <View style={styles.calendarIconPosition}>
        <CalendarIcon />
      </View>
      <View>
        <Text style={styles.headingTitleText}>You don’t have any meds</Text>
        <View style={styles.subTitlePosition}>
          <Text style={styles.subTitleText}>Click </Text>
          <Text style={styles.plusText}>+ </Text>
          <Text style={styles.subTitleText}>to add your first treatment</Text>
        </View>
      </View>
      <View style={styles.addMedicineButtonPosition}>
        <TouchableOpacity style={styles.addMedicineButton}>
          <View style={styles.addMedicineButtonProperties}>
            <PlusIcon name="plus" size={22} color={'#FBFAF3'}></PlusIcon>
            <Text style={styles.addMedicineText}>Add Medicine</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GuestLogin;
