import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
import medicineDailyDoseItems from '../../utils/medicineDailyDoseItems';
import * as Progress from 'react-native-progress';

function MedicineDailyDoses() {
  return (
    <View style={styles.container}>
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
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default MedicineDailyDoses;
