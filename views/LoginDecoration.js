import React from 'react'
import { View, StyleSheet } from 'react-native';

export default function LoginDecoration() {
    return (
        <View style={styles.parent}>
            <View style={[styles.rectRounded, styles.rect1]} />
            <View style={[styles.rectRounded, styles.rect2]} />
            <View style={[styles.rectRounded, styles.rect3]} />
            <View style={[styles.rectRounded, styles.rect4]} />
            <View style={[styles.rectRounded, styles.rect5]} />
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        width:"100%",
        height:"100%",
        position:"absolute",
        top:0
    },
    rectRounded:{
        backgroundColor:"#35A7FF",
        borderRadius:60,
        position:"absolute",
    },

    rect1:{
        width:"80%",
        height:70,    
        top:0,
        right:"30%"
    },
    rect2:{
        width:"70%",
        height:60,    
        top:70,
        right:"45%",
        opacity:0.8,
    },
    rect3:{
        width:"60%",
        height:50,    
        top:130,
        right:"60%",
        opacity:0.6,
    },
    rect4:{
        width:"50%",
        height:40,    
        top:180,
        right:"75%",
        opacity:0.4,
    },
    rect5:{
        width:"40%",
        height:30,    
        top:220,
        right:"90%",
        opacity:0.2,
    },
    
});