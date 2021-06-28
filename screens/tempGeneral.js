import React, {useLayoutEffect, useState, useContext } from 'react';
import { StyleSheet, Modal, View, FlatList, Image, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import CityTile from "../components/cityTile";
import { ToDoContext } from '../data/ToDoContext';
import DefaultStyle from '../constants/Color';
import { useColorScheme } from 'react-native-appearance';
import { getBackgroundColorTheme } from '../constants/Theme';
import { useDimensions } from '@react-native-community/hooks';


export default TempGeneral = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(true);

    const [toDoData, setToDoData] = useContext(ToDoContext);

    const cities = toDoData.citiestemp;

    const colorScheme = useColorScheme();

    const { height } = useDimensions().window;

    const clickHandler = id => {
        navigation.navigate("TempCity", {itemId: id});
      };

  
    useLayoutEffect(() => {
        navigation.setOptions({      
            headerTitle: "Temperature",
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={DefaultStyle.size} color={DefaultStyle.primary}/>}
          onPress={() => navigation.navigate("AddCity")}/>)
          });
    }, [navigation]);

    return (
      <View style={height > 650 ? styles.container : styles.containerHorizontal, {backgroundColor: getBackgroundColorTheme(colorScheme === 'light')}}>
          <Modal visible={modalVisible} transparent={true}>
              <View style={styles.modalView}>
                  <Image
                    style={styles.logo}
                    source={require('../assets/Logo.png')} 
                  />
                  <Button style={styles.button} type='clear' icon={<Ionicons name='arrow-forward' size={DefaultStyle.size} color={DefaultStyle.primary}/>}
                  onPress={() => setModalVisible(false)}/>
                  <Image
                    style={styles.wave}
                    source={require('../assets/wave.png')} 
                  />
              </View>
          </Modal>
          <FlatList
              data={cities}
              renderItem={(itemData) => { return <CityTile text={itemData.item.name} temps={itemData.item.temps.summary} onClick={clickHandler} id={itemData.item.id} effect={'temps'}/>}}
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    marginLeft: 10,
    flex : 1,
  },
  modalView: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'space-between',
  },
  logo: {
    marginTop: 70,
    resizeMode : 'contain',
  },
  wave: {

    resizeMode: 'contain',
    
    
  }
  
});