import { AsyncStorage } from 'react-native';

export const storeData = (data) => {
    try {
        AsyncStorage.setItem('APPDATA2', JSON.stringify(data));
    } catch (e) {
        throw e;
    }
};

export const getData = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('APPDATA2').then(value => {
            if (value != null) {
                resolve(value);
            } else {
                reject(Error('something went wrong!'))
            }
        })
    })
};