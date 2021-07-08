import React, { useLayoutEffect, useContext, useState } from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { ToDoContext } from '../data/ToDoContext';
import { Table, Row, Rows } from 'react-native-table-component';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme, getTextColorTheme, getColorTheme, getHeaderBackgroundColorTheme } from '../constants/Theme';
import { useDimensions } from '@react-native-community/hooks';

export default AirCity = ({ route, navigation }) => {

  const colorScheme = useColorScheme();

  const { itemId } = route.params;
  const [toDoData, setToDoData] = useContext(ToDoContext);
  const selectedCity = toDoData.citiesair.find(cit => cit.id === itemId);
  const cityName = selectedCity.name;

  const layout = useWindowDimensions();

  let times = [1961, 1971, 1981, 1991, 2001, 2011, 2021]

  let data1 = [[], [], [], [], [], [], [], [], [], [], [], []];

  let routeViews = [];

  const { height } = useDimensions().window;

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
      rowData[a].push([times[i], selectedCity.temps.month[a][i] + ' µg/m^3']);
    }
  }

  const [getData, setData] = useState({
    tableTop: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    tableHead: [['Januar'], ['Februar'], ['März'], ['April'], ['Mai'], ['Juni'], ['Juli'], ['August'], ['September'], ['Oktober'], ['November'], ['Dezember']],
    tableData: rowData
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { height: 100, backgroundColor: getHeaderBackgroundColorTheme(colorScheme === 'light') },
      headerTitle: cityName
    });
  }, [navigation]);

  for (let index = 0; index < 12; index++) {

  let route = () => (
    <ScrollView>
    <View style={ height > 650 ? styles.view : styles.viewHorizontal}>
      <Table borderStyle={{ borderWidth: 1, borderColor: DefaultStyle.tableBorderColor }}>
        <Row data={getData.tableHead[index]} style={{backgroundColor: getColorTheme(colorScheme === 'light'), height: 40}} textStyle={{color: getTextColorTheme(colorScheme === 'light'), margin: 6}}/>
        <Rows data={getData.tableData[index]} textStyle={{ color: getTextColorTheme(colorScheme === 'light'), margin: 6 }} />
      </Table>
      <Chart
        style={{ height: 120, width: '100%', marginTop: 20 }}
        xDomain={{ min: 1961, max: 2021 }}
        yDomain={{ min: 5, max: 230 }}
        padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
      >
        <VerticalAxis tickValues={[5, 30, 55, 80, 105, 130, 155, 180, 205, 230]} theme={{ labels: { label: { color: getTextColorTheme(colorScheme === 'light')}}}} />
        <HorizontalAxis tickCount={7} color={'#fff'} theme={{ labels: { label: { color: getTextColorTheme(colorScheme === 'light')}}}} />
        <Line data={data1[index]} smoothing="none" theme={{ stroke: { color: getColorTheme(colorScheme === 'light'), width: 2 } }} />
      </Chart>
    </View>
    </ScrollView>
  );

  routeViews.push(
     route
   )
    
  }

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
    january: routeViews[0],
    february: routeViews[1],
    march: routeViews[2],
    april: routeViews[3],
    may: routeViews[4],
    june: routeViews[5],
    july: routeViews[6],
    august: routeViews[7],
    september: routeViews[8],
    october: routeViews[9],
    november: routeViews[10],
    december: routeViews[11],


  });



  return (

    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={{ backgroundColor: getBackgroundColorTheme(colorScheme === 'light') }}
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
  viewHorizontal: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    marginBottom: 30
  },
  tableTop: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
  },

});