import React, {useRef} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  findNodeHandle,
  Keyboard,
  Platform,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Payment = () => {
  const handlePayment = () => {
    const options = {
      description: 'Sample Payment',
      image: 'https://your-image-url.png',
      currency: 'INR',
      key: 'YOUR_RAZORPAY_KEY',
      amount: '10000',
      name: 'Demo Payment',
      prefill: {
        email: 'test@example.com',
        contact: '9999999999',
        name: 'John Doe',
      },
      theme: {color: '#F37254'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        console.log({data});
        // Payment successful
        // Handle success actions
      })
      .catch(error => {
        console.log({error});
        // Payment failed
        // Handle failure actions
      });
  };

  const scrollRef = useRef(null);
  const inputPositions = useRef([]);

  const handleTextInputFocus = index => {
    const extraScrollValue = 100; // Adjust this value as needed

    if (inputPositions.current[index]) {
      const inputStart = inputPositions.current[index].y;
      const scrollTo = inputStart - extraScrollValue;

      scrollRef.current.scrollToPosition(0, scrollTo, true);
    }
  };

  const handleLayout = (index, event) => {
    inputPositions.current[index] = event.nativeEvent.layout;
  };

  React.useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Keyboard.dismiss();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Payment</Text>
      <Button title="Make Payment" onPress={handlePayment} />
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        ref={scrollRef}
        // onKeyboardWillShow={Keyboard.scrollToFocusedInput}
        enableOnAndroid>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Field 1"
            onFocus={() => handleTextInputFocus(0)}
            onLayout={event => handleLayout(0, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 2"
            onFocus={() => handleTextInputFocus(1)}
            onLayout={event => handleLayout(1, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 3"
            onFocus={() => handleTextInputFocus(2)}
            onLayout={event => handleLayout(2, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 3"
            onFocus={() => handleTextInputFocus(3)}
            onLayout={event => handleLayout(3, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 3"
            onFocus={() => handleTextInputFocus(4)}
            onLayout={event => handleLayout(4, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 3"
            onFocus={() => handleTextInputFocus(5)}
            onLayout={event => handleLayout(5, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
          <TextInput
            placeholder="Field 3"
            onFocus={() => handleTextInputFocus(6)}
            onLayout={event => handleLayout(6, event)}
            style={{borderWidth: 1, marginBottom: 10}}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Payment;
