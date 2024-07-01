import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import weekDays from '../../utils/weekDays';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';

type weekDaysProps = {
  item: string;
  index: number;
};

function WeekDays() {
  const navigation = useNavigation();
  const [day, setDay] = useState('');

  const RenderItems: React.FC<weekDaysProps> = ({item, index}) => {
    const handlePress = () => {
      if (index === 0) {
        setDay('Sunday');
      } else if (index === 1) {
        setDay('Monday');
      } else if (index === 2) {
        setDay('Tuesday');
      } else if (index === 3) {
        setDay('Wednesday');
      } else if (index === 4) {
        setDay('Thursday');
      } else if (index === 5) {
        setDay('Friday');
      } else if (index === 6) {
        setDay('Saturday');
      }
    };

    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Text style={styles.daysNameText}>Select Days:</Text>
      <FlatList
        numColumns={7}
        data={weekDays}
        renderItem={({item, index}) => (
          <RenderItems item={item} index={index} key={index.toString()} />
        )}
      />

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
}

export default WeekDays;
