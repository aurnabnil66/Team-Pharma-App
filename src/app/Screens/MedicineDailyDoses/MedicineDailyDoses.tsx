import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import medicineDailyDoseItems from '../../utils/medicineDailyDoseItems';
import ScrollableTimePicker from '../../Components/ScrollableTimePicker/ScrollableTimePicker';
import HorizontalNumberPicker from '../../Components/HorizontalNumberPicker/HorizontalNumberPicker';

type timePeriodItemProps = {
  item: string;
  index: number;
};

function MedicineDailyDoses() {
  const navigation = useNavigation();
  const [duration, setDuration] = useState('');

  const RenderItems: React.FC<timePeriodItemProps> = ({item, index}) => {
    const handlePress = () => {
      if (index === 0) {
        setDuration('Once a Day');
      } else if (index === 1) {
        setDuration('Twice a Day');
      } else if (index === 2) {
        setDuration('Three times a Day');
      } else if (index === 3) {
        setDuration('Four times a Day');
      } else if (index === 4) {
        setDuration('X times a Day');
      } else if (index === 5) {
        setDuration('Every X hours');
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
      <View style={styles.headerAndProgressBarPosition}>
        <SecondaryHeader mainTitle="How often do you take it?" />
        <Progress.Bar
          color="#9BBDC4"
          progress={0.4}
          width={380}
          style={styles.progressBarPosition}
        />
        <View style={styles.buttonPositions}>
          <FlatList
            numColumns={2}
            data={medicineDailyDoseItems}
            renderItem={({item, index}) => (
              <RenderItems item={item} index={index} key={index.toString()} />
            )}
          />
        </View>
      </View>
      <View style={styles.dailyDoseItemsPosition}>
        {duration === 'Once a Day' && <ScrollableTimePicker />}
        {duration === 'Twice a Day' && <ScrollableTimePicker />}
        {duration === 'X times a Day' && <HorizontalNumberPicker />}
        {duration === 'Every X hours' && <HorizontalNumberPicker />}
      </View>
    </View>
  );
}

export default MedicineDailyDoses;
