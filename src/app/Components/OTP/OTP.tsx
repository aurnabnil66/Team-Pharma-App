import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';

const Otp = forwardRef((props, ref) => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const handleTextChange = (
    text: string,
    setOtp: React.Dispatch<React.SetStateAction<string>>,
    ref: React.RefObject<TextInput>,
  ) => {
    setOtp(text);
    if (text && ref.current) {
      ref.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    clearOtp: () => {
      setOtp1('');
      setOtp2('');
      setOtp3('');
      setOtp4('');
      input1.current?.blur();
      input2.current?.blur();
      input3.current?.blur();
      input4.current?.blur();
    },
  }));

  return (
    <View>
      <View style={styles.otpPosition}>
        <TextInput
          ref={input1}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
          value={otp1}
          onChangeText={text => handleTextChange(text, setOtp1, input2)}
        />
        <TextInput
          ref={input2}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
          value={otp2}
          onChangeText={text => handleTextChange(text, setOtp2, input3)}
        />
        <TextInput
          ref={input3}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
          value={otp3}
          onChangeText={text => handleTextChange(text, setOtp3, input4)}
        />
        <TextInput
          ref={input4}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.otpText}
          textAlign="center"
          maxLength={1}
          value={otp4}
          onChangeText={text => {
            setOtp4(text);
            if (text.length > 0) {
              input4.current?.blur(); // Optionally blur the last input
            }
          }}
        />
      </View>
    </View>
  );
});

export default Otp;
