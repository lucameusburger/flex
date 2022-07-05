import { useState } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Pressable, Image } from 'react-native';

const Images = {
  aa: require('../../assets/chubs/aa.png'),
  ab: require('../../assets/chubs/ab.png'),
  ac: require('../../assets/chubs/ac.png'),
  ba: require('../../assets/chubs/ba.png'),
  bb: require('../../assets/chubs/bb.png'),
  bc: require('../../assets/chubs/bc.png'),
  ca: require('../../assets/chubs/ca.png'),
  cb: require('../../assets/chubs/cb.png'),
  cc: require('../../assets/chubs/cc.png'),
  da: require('../../assets/chubs/da.png'),
  db: require('../../assets/chubs/db.png'),
  dc: require('../../assets/chubs/dc.png'),
};

export const Chub = ({ title = 'aa' }) => {
  const [open, setOpen] = useState(false);

  return (
    <Pressable style={[styles.card, { backgroundColor: open ? '#fff' : '#ffbffb' }]} onPress={() => setOpen(true)}>
      {open && title ? <Image style={styles.cardImage} source={Images[title]} /> : <Text style={styles.cardText}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffbffb',
    padding: 10,
    margin: 10,
    width: 50,
    aspectRatio: 1,
    elevation: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 6,
    borderColor: '#000000',
    borderWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
