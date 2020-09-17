import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { studentInfo } from "../action";

import ListItem from "./ListItem";

export default function Home(props) {
    const dispatch = useDispatch();
    const { navigation } = props;

    //1 - DECLARE VARIABLES
    const [isFetching, setIsFetching] = useState(false);

    //Access Redux Store State
    const dataReducer = useSelector((state) => state.dataReducer);
    const { students } = dataReducer;

    //==================================================================================================

    //2 - MAIN CODE BEGINS HERE
    useEffect(() => getData(), []);

    //==================================================================================================

    //3 - GET FLATLIST DATA
    const getData = () => {
        setIsFetching(true);

        //OPTION 1 - LOCAL DATA
        AsyncStorage.getItem('students', (err, students) => {
            if (err) alert(err.message);
            else if (students !== null) dispatch(studentInfo(JSON.parse(students)));

            setIsFetching(false)
        });

        //OPTION 2 - FAKE API
        // let url = "https://my-json-server.typicode.com/mesandigital/demo/quotes";
        // axios.get(url)
        //     .then(res => res.data)
        //     .then((data) => dispatch(addQuotes(data)))
        //     .catch(error => alert(error.message))
        //     .finally(() => setIsFetching(false));
    };

    //==================================================================================================

    //4 - RENDER FLATLIST ITEM
    const renderItem = ({item, index}) => {
        return (
            <ListItem item={item} index={index} />
        )
    };
     if (isFetching) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else{
            return (
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={students}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `students_${index}`}/>

                    <TouchableHighlight style={styles.floatingButton}
                                        underlayColor='#ff7043'
                                        >
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>
                </SafeAreaView>
            );
        }
    };

    const styles = StyleSheet.create({

        container: {
            flex:1,
            backgroundColor: '#F5F5F5'
        },

        activityIndicatorContainer:{
            backgroundColor: "#fff",
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },

        floatingButton:{
            backgroundColor: '#6B9EFA',
            borderColor: '#6B9EFA',
            height: 55,
            width: 55,
            borderRadius: 55 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 60,
            right: 15,
            shadowColor: "#000000",
            shadowOpacity: 0.5,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 0
            }
        }
    });