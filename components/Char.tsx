import React from "react";
import { View, Text, TextInput } from 'react-native';

const color = ["gray", "skyblue", "green"]

interface props {
    char: string;
    type: number;
}

function Char({char, type} : props) {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color[type],
            margin: 5,
            width: 50,
            height: 50
        }}>
            <Text style={{
                color: "white",
                fontSize: 30
            }}>
                {char}
            </Text>
        </View>
    )
}

export default Char;