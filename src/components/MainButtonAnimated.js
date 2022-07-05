import * as React from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image, Pressable, StatusBar, Animated } from 'react-native';

export const MainButtonAnimated = ({ navigation, title, onPress }) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPress={onPress} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={[
          styles.button,
          {
            opacity: animated,
          },
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

// style class for card
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffbffb',
    padding: 10,
    margin: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000000',
  },
  buttonPressed: {
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
});
