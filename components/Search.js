import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Search({ executeSearch }) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.searchBox}>
      <TextInput
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search By Type..."
        returnKeyType="search"
        onSubmitEditing={() => executeSearch(search)}
        style={styles.inputText}
        placeholderTextColor="#EEFBFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 100,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#EEFBFF',
    borderWidth: 0.5,
    padding: 5,
    width: 220,
  },
  inputText: {
    color: '#fff',
  },
});
