import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './style';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const FullCalendar: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<{
    [date: string]: {selected: boolean};
  }>({});
  const [modalVisible, setModalVisible] = useState(false);

  // Custom function to format date as "30 June"
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const handleDayPress = (day: any) => {
    const dateString = day.dateString;
    const updatedDates = {...selectedDates};

    // Toggle date selection
    if (updatedDates[dateString]) {
      delete updatedDates[dateString];
    } else {
      updatedDates[dateString] = {selected: true};
    }

    setSelectedDates(updatedDates);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}>
        <Text style={styles.buttonText}>Show Calendar</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={Object.keys(selectedDates).reduce((marked, date) => {
                marked[date] = {
                  selected: true,
                  customStyles: {
                    container: {
                      backgroundColor: '#045A6C',
                      borderRadius: scale(20),
                    },
                    text: {
                      color: 'white',
                    },
                  },
                };
                return marked;
              }, {} as any)}
              markingType={'custom'}
              theme={{
                todayTextColor: '#045A6C',
                dayTextColor: '#1D1C2B',
                monthTextColor: '#045A6C', // Change month text color
                arrowColor: '#045A6C', // Change arrow color
                selectedDayBackgroundColor: '#045A6C',
                selectedDayTextColor: '#ffffff',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textMonthFontSize: moderateScale(16),
                textDayFontSize: moderateScale(18),
                textDayHeaderFontSize: moderateScale(16),
              }}
              style={{
                width: scale(270), // Increase the width of the calendar
                height: 'auto', // Increase the height of the calendar
              }}
            />
            <View style={styles.horizontalLine}></View>
            <Text style={styles.selectedDaysHeaderText}>Selected Days:</Text>
            <View style={styles.selectedDaysContainer}>
              <View style={styles.selectedDaysTextPosition}>
                {Object.keys(selectedDates).map((dateString, index) => (
                  <Text key={index} style={styles.selectedDaysText}>
                    {formatDate(new Date(dateString))},{' '}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.cancelAndOKbuttonPosition}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelAndOKbutton}>
                <Text style={styles.cancelAndOKButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelAndOKbutton}>
                <Text style={styles.cancelAndOKButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FullCalendar;
