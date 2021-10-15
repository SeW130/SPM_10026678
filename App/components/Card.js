import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.styles}}>{props.children}</View>
    );
}
const styles = StyleSheet.create({
       card: {
        maxHeight: '100%',
        maxWidth: '90%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        padding: 20,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 80
       
       }
});

export default Card;

