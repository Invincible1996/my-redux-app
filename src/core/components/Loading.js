

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>数据加载中～～～～～～ </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})