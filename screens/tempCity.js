import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { ToDoContext } from '../data/ToDoContext';
import { Table, Row, Rows } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme, getTextColorTheme, getColorTheme } from '../constants/Theme';

export default TempCity = ({ route, navigation }) => {

  const colorScheme = useColorScheme();

  const { itemId } = route.params;
  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.citiestemp.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  const layout = useWindowDimensions();

  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021];


  let data1 = [[], [], [], [], [], [], [], [], [], [], [], []];

  for (let a = 0; a < 12; a += 1) {
    for (let i = 0; i < times.length; i += 1) {
      data1[a].push({
        x: times[i],
        y: selectedCity.temps.month[a][i]
      })
    }
  }

  const rowData = [[], [], [], [], [], [], [], [], [], [], [], []];
  for (let a = 0; a < 12; a += 1) {
    for (let i = 0; i < times.length; i += 1) {
      rowData[a].push([times[i], selectedCity.temps.month[a][i]+'°C']);
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
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[0]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[0]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[0]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[1]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[1]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[1]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const ThirdRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[2]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[2]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[2]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );
  const FourthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[3]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[3]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[3]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const FifthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[4]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[4]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[4]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );
  const SixthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[5]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[5]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[5]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const SeventhRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[6]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[6]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[6]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const EighthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[7]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[7]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[7]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );
  const NinthRoute = () => (
    <View style={styles.view}>
      <Table  borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[8]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[8]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[8]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );
  const TenthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[9]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[9]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[9]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const EleventhRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[10]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[10]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[10]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
  );

  const TwelfthRoute = () => (
    <View style={styles.view}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[11]} style={styles.head} textStyle={styles.text} />
        <Rows data={getData.tableData[11]} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}} />
      </Table>
      <Chart
      style={{ height: 120, width: '100%', marginTop: 20 }}
      xDomain={{ min: 1961, max: 2021 }}
      yDomain={{ min: -10, max: 40 }}
      padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
     >
      <VerticalAxis tickValues={[-10, 0, 10, 20, 30, 40]} />
      <HorizontalAxis tickCount={7} />
      <Line data={data1[11]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
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
        style = {{backgroundColor: getBackgroundColorTheme(colorScheme === 'light')}}
        initialLayout={{ width: layout.width }}
        renderTabBar={props =>
          	  <TabBar
          	    {...props}
          	    indicatorStyle={{ backgroundColor: 'white' }}
                tabStyle={{ backgroundColor: getColorTheme(colorScheme === 'light'), minHeight: 50, padding: -10 }}
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
  view: {
    margin: 30,
  },
  tableTop: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
  },

  head: { height: 40, backgroundColor: DefaultStyle.tableHeadBackgroundColor },
  text: { margin: 6 },

});