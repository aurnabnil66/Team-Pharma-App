import {Text, View} from 'react-native';
import styles from './style';

interface ISecondaryHeaderProps {
  mainTitle: String;
}

const SecondaryHeader = (HearderProps: ISecondaryHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.headerMainTitle}>{HearderProps.mainTitle}</Text>
      </View>
    </View>
  );
};

export default SecondaryHeader;
