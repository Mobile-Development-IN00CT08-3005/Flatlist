import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data'
import Row from './components/Row'
import Search from './components/Search'
import React, { useState, useEffect } from 'react'

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.type.startsWith(search))
    setItems(searchArray)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23588C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});