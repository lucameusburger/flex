import { useState } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image, Pressable, StatusBar, Animated } from 'react-native';

export const MainButton = ({ navigation, title, onPress }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable onPress={onPress} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
      <Animated.View
        style={[
          styles.button,
          {
            backgroundColor: pressed ? '#fff' : '#ffbffb',
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
  buttonText: {
    fontSize: 20,
    color: '#000000',
  },
});
