import React, {useLayoutEffect, useState } from 'react';
import { StyleSheet, Modal, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native-elements';

export default TempGeneral = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(true);
  
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
        <Text>Temperatures General here!</Text>
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