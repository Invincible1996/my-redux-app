/**
* React Native File
* created by wenqiang on 2018/3/28
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-native'
import { connect } from 'react-redux'
function mapStateToProps(store, props) {
    return {
    }
}
@connect(mapStateToProps)
    export default () => (Comp) => class extends Component {
        static navigationOptions = Comp.navigationOptions;

        constructor(props) {
            super(props)
            this.state = {
                showError: false
            }
        }

        componentDidMount() {
            console.log('======', this.props)
        }

        push() {
            console.log('push～～～～～～～～')
        }


        render() {
            return (<View style={styles.container}>
                <Comp push={this.push} {...this.props} />
            </View>)
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})