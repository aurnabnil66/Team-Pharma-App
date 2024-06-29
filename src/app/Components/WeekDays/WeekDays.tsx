import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import weekDays from '../../utils/weekDays';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

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
        navigation.navigate('MedicineDailyDoses' as never);
      } else if (index === 1) {
        setDay('Weekly');
      } else if (index === 2) {
        setDay('Monthly');
      } else if (index === 3) {
        setDay('Every X days');
      } else if (index === 4) {
        setDay('Every X weeks');
      } else if (index === 5) {
        setDay('Every X months');
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
      <FlatList
        numColumns={3}
        data={weekDays}
        renderItem={({item, index}) => (
          <RenderItems item={item} index={index} key={index.toString()} />
        )}
      />
    </View>
  );
}

export default WeekDays;
