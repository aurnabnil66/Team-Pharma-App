// import {FlatList, Text, TouchableOpacity, View} from 'react-native';
// import styles from './style';
// import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
// import medicineDoseItems from '../../utils/medicineDoseItems';
// import * as Progress from 'react-native-progress';
// import {useNavigation} from '@react-navigation/native';
// import {useState} from 'react';
// import HorizontalNumberPicker from '../../Components/HorizontalNumberPicker/HorizontalNumberPicker';
// import WeekDays from '../../Components/WeekDays/WeekDays';
// import FullCalendar from '../../Components/FullCalendar/FullCalender';

// type timePeriodItemProps = {
//   item: string;
//   index: number;
// };

// function MedicineDoses() {
//   const navigation = useNavigation();
//   const [duration, setDuration] = useState('');
//   const [calendarVisible, setCalendarVisible] = useState(false);

//   const RenderItems: React.FC<timePeriodItemProps> = ({item, index}) => {
//     const handlePress = () => {
//       if (index === 0) {
//         navigation.navigate('MedicineDailyDoses' as never);
//       } else if (index === 1) {
//         setDuration('Weekly');
//       } else if (index === 2) {
//         setDuration('Monthly');
//         setCalendarVisible(true);
//       } else if (index === 3) {
//         setDuration('Every X days');
//       } else if (index === 4) {
//         setDuration('Every X weeks');
//       } else if (index === 5) {
//         setDuration('Every X months');
//       }
//     };

//     return (
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.buttonText}>{item}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerAndProgressBarPosition}>
//         <SecondaryHeader mainTitle="How often do you take it?" />
//         <Progress.Bar
//           color="#9BBDC4"
//           progress={0.2}
//           width={380}
//           style={styles.progressBarPosition}
//         />
//         <View style={styles.buttonPositions}>
//           <FlatList
//             numColumns={2}
//             data={medicineDoseItems}
//             renderItem={({item, index}) => (
//               <RenderItems item={item} index={index} key={index.toString()} />
//             )}
//           />
//         </View>
//       </View>
//       <View style={styles.doseItemsPosition}>
//         {duration === 'Weekly' && <WeekDays />}
//         {duration === 'Monthly' && (
//           <FullCalendar
//             modalVisible={calendarVisible}
//             setModalVisible={setCalendarVisible}
//           />
//         )}
//         {duration === 'Every X days' && <HorizontalNumberPicker />}
//         {duration === 'Every X weeks' && <HorizontalNumberPicker />}
//         {duration === 'Every X months' && <HorizontalNumberPicker />}
//       </View>
//     </View>
//   );
// }

// export default MedicineDoses;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import SecondaryHeader from '../../Components/SecondaryHeader/SecondaryHeader';
import medicineDoseItems from '../../utils/medicineDoseItems';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import HorizontalNumberPicker from '../../Components/HorizontalNumberPicker/HorizontalNumberPicker';
import WeekDays from '../../Components/WeekDays/WeekDays';
import CalendarModal from '../../Components/CalendarModal/CalenderModal';

type timePeriodItemProps = {
  item: string;
  index: number;
};

function MedicineDoses() {
  const navigation = useNavigation();
  const [duration, setDuration] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    [date: string]: {selected: boolean};
  }>({});

  const RenderItems: React.FC<timePeriodItemProps> = ({item, index}) => {
    const handlePress = () => {
      if (index === 0) {
        navigation.navigate('MedicineDailyDoses' as never);
      } else if (index === 1) {
        setDuration('Weekly');
      } else if (index === 2) {
        setDuration('Monthly');
        setModalVisible(true);
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

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerAndProgressBarPosition}>
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
        {duration === 'Every X days' && <HorizontalNumberPicker />}
        {duration === 'Every X weeks' && <HorizontalNumberPicker />}
        {duration === 'Every X months' && <HorizontalNumberPicker />}
        {duration === 'Monthly' && (
          <FlatList
            data={Object.keys(selectedDates)}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity style={styles.selectedDaysViewButton}>
                  <Text style={styles.selectedDaysViewButtonText}>
                    {formatDate(new Date(item))}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={3}
            style={styles.selectedDaysList}
          />
        )}
      </View>
      <CalendarModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedDates={selectedDates}
        setSelectedDates={setSelectedDates}
      />
    </View>
  );
}

export default MedicineDoses;
