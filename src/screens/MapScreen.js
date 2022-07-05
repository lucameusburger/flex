import * as React from 'react';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';

import { Chub } from '../components/Chub';

export const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <ScrollView style={{ width: '100%', height: '100%', padding: 10 }}>
        <View style={styles.row}>
          <Chub title="aa" />
          <Chub title="ab" />
          <Chub title="ac" />
        </View>
        <View style={styles.row}>
          <Chub title="ba" />
          <Chub title="bb" />
          <Chub title="bc" />
        </View>
        <View style={styles.row}>
          <Chub title="ca" />
          <Chub title="cb" />
          <Chub title="cc" />
        </View>
        <View style={styles.row}>
          <Chub title="da" />
          <Chub title="db" />
          <Chub title="dc" />
        </View>
        <View style={styles.row}>
          <Chub title="ea" />
          <Chub title="eb" />
          <Chub title="ec" />
        </View>
        <View style={styles.row}>
          <Chub title="fa" />
          <Chub title="fb" />
          <Chub title="fc" />
        </View>
        <View style={styles.row}>
          <Chub title="ga" />
          <Chub title="gb" />
          <Chub title="gc" />
        </View>
        <View style={styles.row}>
          <Chub title="ha" />
          <Chub title="hb" />
          <Chub title="hc" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'top',
  },
});
