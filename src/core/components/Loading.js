

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { RotationHoleLoader } from 'react-native-indicator'

export default class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RotationHoleLoader color='#fff' size={26} />
                <Text style={styles.loadingText}>数据加载中...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FFF',
        fontSize: 14,
        marginTop: 10
    }
})