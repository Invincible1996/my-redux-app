/**
* React Native File
* created by wenqiang on 2018/3/28
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../components/Loading'

function mapStateToProps(store, props) {
    console.log('store', store)
    return {
        isLoading: store.fetchReducers.isLoading
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
            console.log('===2222===', this.props)
        }

        push() {
            console.log('push～～～～～～～～')
        }


        render() {
            return (<View style={styles.container}>
                <Comp push={this.push} {...this.props} />
                {this.props.isLoading && <Loading />}
            </View>)
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})