/**
* React Native File
* created by wenqiang on 2018/3/28
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Home from '../pages/home/HomePage'
const StackNav = StackNavigator({
    Home: { screen: Home }
})

export default StackNav