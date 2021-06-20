import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { ToDoContext } from '../data/ToDoContext';
import { Table, Row, Rows } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';



export default AirCity = ({ route, navigation }) => {

  

  const { itemId } = route.params;
  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.citiesair.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  const layout = useWindowDimensions();

  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  const rowData = [[], [], [], [], [], [], [], [], [], [], [], []];
  for (let a = 0; a < 12; a += 1) {
    for (let i = 0; i < times.length; i += 1) {
      rowData[a].push([times[i], selectedCity.temps.month[a][i]+' µg/m^3']);
    }
  }

 
  const [getData, setData] = useState({
    tableTop: ['J', 'F', 'M','A','M','J','J','A','S','O','N','D'],
    tableHead: [['Januar'],['Februar'],['März'],['April'], ['Mai'],['Juni'],['Juli'],['August'],['September'],['Oktober'],['November'],['Dezember']],
    tableData: rowData
  })
  useLayoutEffect(() => {
    navigation.setOptions({      
        headerTitle: cityName
      });
  }, [navigation]);  

  const FirstRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[0]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[0]} textStyle={styles.text} />
    </Table>
  );

  const SecondRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[1]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[1]} textStyle={styles.text} />
    </Table>
  );

  const ThirdRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[2]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[2]} textStyle={styles.text} />
    </Table>
  );
  const FourthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[3]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[3]} textStyle={styles.text} />
    </Table>
  );

  const FifthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[4]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[4]} textStyle={styles.text} />
    </Table>
  );
  const SixthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[5]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[5]} textStyle={styles.text} />
    </Table>
  );

  const SeventhRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[6]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[6]} textStyle={styles.text} />
    </Table>
  );

  const EighthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[7]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[7]} textStyle={styles.text} />
    </Table>
  );
  const NinthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[8]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[8]} textStyle={styles.text} />
    </Table>
  );
  const TenthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[9]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[9]} textStyle={styles.text} />
    </Table>
  );

  const EleventhRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[10]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[10]} textStyle={styles.text} />
    </Table>
  );

  const TwelfthRoute = () => (
    <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff' }}>
      <Row data={getData.tableHead[11]} style={styles.head} textStyle={styles.text} />
      <Rows data={getData.tableData[11]} textStyle={styles.text} />
    </Table>
  );

  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'january', title: 'J' },
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
    january: FirstRoute,
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
        renderTabBar={props =>
          	  <TabBar
          	    {...props}
          	    indicatorStyle={{ backgroundColor: 'white' }}
                tabStyle={{ backgroundColor: '#0068d3', minHeight: 50, padding: -10 }}
          	  />
          	}
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