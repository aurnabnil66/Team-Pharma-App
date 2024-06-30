import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
import medicineDoseItems from '../../utils/medicineDoseItems';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import HorizontalNumberPicker from '../../Components/HorizontalNumberPicker/HorizontalNumberPicker';
import WeekDays from '../../Components/WeekDays/WeekDays';
import FullCalendar from '../../Components/FullCalendar/FullCalender';

type timePeriodItemProps = {
  item: string;
  index: number;
};

function MedicineDoses() {
  const navigation = useNavigation();
  const [duration, setDuration] = useState('');

  const RenderItems: React.FC<timePeriodItemProps> = ({item, index}) => {
    const handlePress = () => {
      if (index === 0) {
        navigation.navigate('MedicineDailyDoses' as never);
      } else if (index === 1) {
        setDuration('Weekly');
      } else if (index === 2) {
        setDuration('Monthly');
      } else if (index === 3) {
        setDuration('Every X days');
      } else if (index === 4) {
        setDuration('Every X weeks');
      } else if (index === 5) {
        setDuration('Every X months');
      }
    };

    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flex: 2}}>
        <SecondaryHeader mainTitle="How often do you take it?" />
        <Progress.Bar
          color="#9BBDC4"
          progress={0.2}
          width={380}
          style={styles.progressBarPosition}
        />
        <View style={styles.buttonPositions}>
          <FlatList
            numColumns={2}
            data={medicineDoseItems}
            renderItem={({item, index}) => (
              <RenderItems item={item} index={index} key={index.toString()} />
            )}
          />
        </View>
      </View>
      <View style={styles.doseItemsPosition}>
        {duration === 'Weekly' && <WeekDays />}
        {duration === 'Monthly' && <FullCalendar />}
        {duration === 'Every X days' && <HorizontalNumberPicker />}
        {duration === 'Every X weeks' && <HorizontalNumberPicker />}
        {duration === 'Every X months' && <HorizontalNumberPicker />}
      </View>
    </View>
  );
}

export default MedicineDoses;
