import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ToDoContext } from '../data/ToDoContext';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default AirCity = ({ route, navigation }) => {

  const { itemId } = route.params;
  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.cities.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  
  const tableData = [];
  const rowData = [];
  for (let i = 0; i < times.length; i += 1) {
    rowData.push([times[i],selectedCity.temps[i]]);
  }
  console.log(rowData)

  
  const [getABC, setABC] = useState({
    tableHead: ['Januar'],
    tableData: rowData
  })


  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: cityName
    });
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
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
  table: {
    margin: 30,
  },

  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});