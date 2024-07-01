import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {moderateScale} from 'react-native-size-matters';
import RightArrowIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './style';

const Items = Array.from(Array(21).keys());

const HorizontalNumberPicker: React.FC = () => {
  const [selected, setSelected] = useState<number>(10); // State to track selected index, initial is 10

  const renderItem = (item: number, index: number) => {
    // Calculate opacity, font size, and color based on distance from selected index
    const distance = Math.abs(selected - index);
    let opacity = 0.25;
    let fontSize = moderateScale(12);
    let color = '#000';

    if (distance === 0) {
      opacity = 1.0;
      fontSize = moderateScale(18);
      color = '#045A6C'; // Selected item color
    } else if (distance === 1) {
      opacity = 0.5;
      fontSize = moderateScale(18);
      color = '#000'; // Nearby item color
    }

    return (
      <View style={[styles.item, {opacity}]}>
        <Text style={[styles.itemText, {fontSize, color}]}>{item}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <HorizontalPicker
          data={Items}
          renderItem={renderItem}
          itemWidth={80}
          onChange={index => setSelected(index)}
        />
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

export default HorizontalNumberPicker;
