import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ToDoContext } from '../data/ToDoContext';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default AirCity = ({ route, navigation }) => {

  const { itemId } = route.params;

  const [getABC, setABC] = useState({
    tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
    tableData: [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
      ['1', '2', '3', '456\n789'],
      ['a', 'b', 'c', 'd']
    ]
  })

  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.cities.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: cityName
    });
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
        <Row data={getABC.tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={getABC.tableData} textStyle={styles.text} />
      </Table>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});