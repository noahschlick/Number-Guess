import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../Constants/colors'

const Card = props => {
    return <View style={{...styles.card, ...props.style}} >{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        shadowOpacity: 0.26,

        // Elavation is needed to display a shadow on the android phone
        // shadow color, shadow offset, shadow radius, and shadow Opacity
        // will not work on the android 
        elevation: 5,

        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;