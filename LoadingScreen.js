import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';




import SampleData from '../sample'

//1 - LOADING SCREEN
export default function LoadingScreen(props) {

    useEffect(() => checkLocalData(), []);

    function checkLocalData(){
        //Check if LocalStorage has been populated with the sample data
        AsyncStorage.getItem('students', (err, data) => {
            //if it doesn't exist, extract from json fil
            if (data === null){
                AsyncStorage.setItem('students', JSON.stringify(SampleData.students));//save the initial data in Async

                props.navigation.navigate('Home'); //Navigate to the home page
            }else{
                props.navigation.navigate('Home'); //Navigate to the home page
            }
        });
    }

 return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator animating={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});