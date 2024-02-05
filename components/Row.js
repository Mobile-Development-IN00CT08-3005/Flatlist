import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Row({ person }) {
  const getTypeColor = (type) => {

    switch (type) {
      case 'Grass':
        return '#67B92C';
      case 'Fire':
        return '#F08030';
      case 'Water':
        return '#6890F0';
      case 'Electric':
        return '#F9C837';
      case 'Normal':
        return '#A7A694';
      case 'Psychic':
        return '#DE3265';
      case 'Dragon':
        return '#725EDB';
      case 'Ghost':
        return '#705898';
      case 'Fighting':
        return '#7B3216';

      default:
        return '#A8A878';
    }
  };

  const backgroundColor = getTypeColor(person.type);

  return (
    <View style={styles.row}>
      <Text style={styles.nameText}>{person.name}</Text>
      <View style={[styles.typeContainer, { backgroundColor }]}>
        <Text style={styles.typeText}>{person.type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#EEFBFF',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    color: '#052636',
    fontSize: 16,
    marginRight: 10,
  },
  typeContainer: {
    padding: 5,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  typeText: {
    color: '#fff',
    fontSize: 16,
  },
});
