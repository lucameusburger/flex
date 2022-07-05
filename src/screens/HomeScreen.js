import * as React from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image, Pressable, StatusBar, Animated } from 'react-native';
import { MainButton } from '../components/MainButton';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.heading}>welcome to flex</Text>
      <Image source={require('../../assets/chubs/aa.png')} style={{ width: 350, height: 350 }} />
      <MainButton title="go to map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
};

// style class for card
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
