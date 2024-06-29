import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';

const ScrollableTimePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <View style={styles.timePickerPosition}>
        <DatePicker mode="time" date={date} onDateChange={setDate} />
      </View>
      <View style={styles.nextButtonPosition}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
          <RightArrowIcon
            name="arrow-right-long"
            size={30}
            color={'#FBFAF3'}></RightArrowIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScrollableTimePicker;
