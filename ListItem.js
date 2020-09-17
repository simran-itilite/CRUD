import React, {useRef} from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';



export default function ListItem ({item, index, navigation, onDelete, onEdit}){
    const inputEl = useRef(null);
    const RightActions = ({ progress, dragX, onPress, item}) => {
            const scale = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
            });

    return (
                <View style={styles.buttons}>
                    <RectButton onPress={() =>  {
                        inputEl.current.close();
                        onEdit(item);
                    }}>
                        <View style={[styles.rightAction, styles.editAction]}>
                            <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                                Edit
                            </Animated.Text>
                        </View>
                    </RectButton>
                    <RectButton onPress={() => {
                        inputEl.current.close();
                        onDelete(item.id)
                    }}>
                        <View style={[styles.rightAction, styles.deleteAction]}>
                            <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                                Delete
                            </Animated.Text>
                        </View>
                    </RectButton>
                </View>
            );

            };
              function random() {
                     if (index % 2 === 0) { //check if its an even number
                         return colours[0];
                     }else{
                         return colours[1];
                     }
                 }


        return (
        <Swipeable  ref={inputEl}
                   renderRightActions={(progress, dragX) => (
                                           <RightActions progress={progress} dragX={dragX} item={item}/>
                                       )} >


                    <View style={styles.container} >

                        <View  style={styles.row} >

                            <Text style={styles.student,styles.name}>
                              {item.name}
                            </Text>
                            <Text style={styles.student}>
                                Age : {item.age}
                            </Text >
                            <Text style={styles.student} >
                             Class : {item.class}
                             </Text>
                              <Text style={styles.student}>Interests : {item.interests}</Text>

                        </View>
                    </View>
                    </Swipeable>



);
};

const styles = StyleSheet.create({
    row:{
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:"#ccc",
        backgroundColor: '#FA8072',
        padding: 10
    },
    name:{
    color:'#DC143C',
    fontSize:22,
    fontWeight:'bold'

    },

    container:{
        padding: 10,
        backgroundColor:'#DC143C'
    },

       student: {
        marginTop: 5,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 17,
        lineHeight: 21,
        color: 'white',
    },

    buttons:{
        width: 190,
        flexDirection: 'row'
    },

    rightAction: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 95,
         fontWeight:'bold'
    },

    editAction: {
        backgroundColor: '#483D8B'
    },

    deleteAction: {
        backgroundColor: '#B22222'
    },

    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20,
    }
});

