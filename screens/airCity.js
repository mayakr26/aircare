import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ToDoContext } from '../data/ToDoContext';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TabView, SceneMap } from 'react-native-tab-view';



export default AirCity = ({ route, navigation }) => {

  const { itemId } = route.params;
  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.cities.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  const layout = useWindowDimensions();

  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  const rowData = [];
  for (let i = 0; i < times.length; i += 1) {
    rowData.push([times[i],selectedCity.temps[i]+'°C']);
  }

  const [getData, setData] = useState({
    tableTop: ['J', 'F', 'M','A','M','J','J','A','S','O','N','D'],
    tableHead: ['Januar'],
    tableData: rowData
  })
  useLayoutEffect(() => {
    navigation.setOptions({      
        headerTitle: cityName
      });
  }, [navigation]);

  const FirstRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const SecondRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const ThirdRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );
  const FourthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const FifthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );
  const SixthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const SeventhRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const EighthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );
  const NinthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );
  const TenthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const EleventhRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );

  const TwelfthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData} textStyle={styles.text} />
    </Table>
  );


  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'januar', title: 'J' },
    { key: 'february', title: 'F' },
    { key: 'march', title: 'M' },
    { key: 'april', title: 'A' },
    { key: 'may', title: 'M' },
    { key: 'june', title: 'J' },
    { key: 'july', title: 'J' },
    { key: 'august', title: 'A' },
    { key: 'september', title: 'S' },
    { key: 'october', title: 'O' },
    { key: 'november', title: 'N' },
    { key: 'december', title: 'D' },

 
  ]);

  const renderScene = SceneMap({
    januar: FirstRoute,
    february: SecondRoute,
    march: ThirdRoute,
    april: FourthRoute,
    may: FifthRoute,
    june: SixthRoute,
    july: SeventhRoute,
    august: EighthRoute,
    september: NinthRoute,
    october: TenthRoute,
    november: EleventhRoute,
    december: TwelfthRoute,


  });
  

  return (
    
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );

  
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
  tableTop: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
  },

  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },

});