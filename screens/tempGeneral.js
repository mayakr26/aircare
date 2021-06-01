import React, {useLayoutEffect, useState } from 'react';
import { StyleSheet, Modal, Text, View, FlatList } from 'react-native';
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
            headerRight: () => (<Button type='clear' icon={<Ionicons name='ios-add' size={32} color="blue"/>}
          onPress={() => navigation.navigate("AddCity")}/>)
          });
    }, [navigation]);

    return (
    <View style={styles.container}>
        <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
                <Text>MODAL!</Text>
                <Button type='clear' icon={<Ionicons name='ios-close' size={32} color="blue"/>}
                onPress={() => setModalVisible(false)}/>
            </View>
        </Modal>
        <FlatList
            data={cities}
            renderItem={(itemData) => { return <CityTile text={itemData.item.name} onClick={clickHandler}id={itemData.item.id}/>}}
        />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'tomato'
  }
});