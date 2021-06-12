import React, {useLayoutEffect, useState } from 'react';
import { StyleSheet, Modal, View, FlatList, Image, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { CITIES } from '../data/dummyData';
import CityTile from "../components/cityTile";

export default TempGeneral = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(true);

    const cities = CITIES;

    const clickHandler = id => {
        navigation.navigate("TempCity", {itemId: id});
      };
  
    useLayoutEffect(() => {
        navigation.setOptions({      
            headerTitle: "Temperature",
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={32} color="#0068d3"/>}
          onPress={() => navigation.navigate("AddCity")}/>)
          });
    }, [navigation]);

    return (
    <View style={styles.container}>
        <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
                <Image
                  style={styles.logo}
                  source={require('../assets/Logo.png')} 
                />
                <Button style={styles.button} type='clear' icon={<Ionicons name='arrow-forward' size={32} color="#0068d3"/>}
                onPress={() => setModalVisible(false)}/>
                <Image
                  style={styles.wave}
                  source={require('../assets/wave.png')} 
                />
            </View>
        </Modal>
        <FlatList
            data={cities}
            renderItem={(itemData) => { return <CityTile text={itemData.item.name + ' ' 
            + itemData.item.dates + ' ' 
            + itemData.item.temps} temps={itemData.item.temps} onClick={clickHandler}id={itemData.item.id}/>}}
        />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
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