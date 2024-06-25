import {ImageBackground, Text, View} from 'react-native';
import styles from './style';

interface IHeaderProps {
  mainTitle: String;
  subTitle: String;
}

const Header = (HearderProps: IHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.headerMainTitle}>{HearderProps.mainTitle}</Text>
        <Text style={styles.headerSubTitle}>{HearderProps.subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
