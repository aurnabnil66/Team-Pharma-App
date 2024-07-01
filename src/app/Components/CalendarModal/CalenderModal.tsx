import React from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import styles from './style';
import {scale, moderateScale} from 'react-native-size-matters';

interface CalendarModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedDates: {[date: string]: {selected: boolean}};
  setSelectedDates: (dates: {[date: string]: {selected: boolean}}) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  modalVisible,
  setModalVisible,
  selectedDates,
  setSelectedDates,
}) => {
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
                textDayFontWeight: '400',
                textMonthFontWeight: '500',
                textDayHeaderFontWeight: '500',
                textMonthFontSize: moderateScale(16),
                textDayFontSize: moderateScale(18),
                textDayHeaderFontSize: moderateScale(14),
              }}
              style={{
                width: scale(270), // Increase the width of the calendar
                height: 'auto', // Increase the height of the calendar
              }}
            />
            <View style={styles.horizontalLine}></View>
            <ScrollView style={styles.scrollViewContainer}>
              <View style={styles.selectedDaysContainer}>
                <Text style={styles.selectedDaysHeaderText}>
                  Selected Days:{' '}
                </Text>
                {Object.keys(selectedDates).length > 0 &&
                  Object.keys(selectedDates).map(date => (
                    <Text key={date} style={styles.selectedDaysText}>
                      {formatDate(new Date(date))}, {''}
                    </Text>
                  ))}
              </View>
            </ScrollView>
            <View style={styles.cancelAndOKbuttonPosition}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelAndOKButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelAndOKButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarModal;
