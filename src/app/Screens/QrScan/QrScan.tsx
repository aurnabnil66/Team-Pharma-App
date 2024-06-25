import React, {useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RNCamera, BarCodeReadEvent} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QrScan: React.FC = () => {
  const navigation = useNavigation();
  const cameraRef = useRef<RNCamera>(null);
  const [scanned, setScanned] = useState(false);
  const [capturing, setCapturing] = useState(false);

  const HandleQrCodeScanned = ({type, data}: BarCodeReadEvent) => {
    if (type === RNCamera.Constants.BarCodeType.qr && !scanned) {
      setScanned(true);
    }
  };

  const TakePicture = async () => {
    if (cameraRef.current && !capturing) {
      setCapturing(true); // Set capturing state to true
      const options = {quality: 0.5, base64: true};
      try {
        const data = await cameraRef.current.takePictureAsync(options);
        navigation.navigate('MedicineDetails' as never); // Navigate to MedicineDetails screen
      } catch (error) {
        console.error('Error taking picture: ', error);
      } finally {
        setCapturing(false); // Reset capturing state
      }
    }
  };

  // const MoveToNext = () => {
  //   navigation.navigate('MedicineDetails' as never);
  // };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        onBarCodeRead={HandleQrCodeScanned}
        captureAudio={false}>
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />
          <View style={styles.middleRow}>
            <View style={styles.leftOverlay} />
            <View style={styles.scannerArea} />
            <View style={styles.rightOverlay} />
          </View>
          <View style={styles.bottomOverlay} />
        </View>
      </RNCamera>

      <TouchableOpacity style={styles.captureButton} onPress={TakePicture}>
        <View style={styles.circle}>
          <Icon name="qr-code-scanner" size={58} color="#424242" />
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.captureButton} onPress={MoveToNext}>
        <View style={styles.circle}>
          <Icon name="qr-code-scanner" size={58} color="#424242" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default QrScan;
