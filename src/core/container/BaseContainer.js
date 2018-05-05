/**
* React Native File
* created by wenqiang on 2018/3/28
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../components/Loading'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions'
function mapStateToProps(store, props) {
    console.log('store', store)
    return {
        isLoading: store.fetchReducers.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
    export default () => (Comp) => class extends Component {
        static navigationOptions = Comp.navigationOptions;

        constructor(props) {
            super(props)
            this.state = {
                showError: false
            }
        }

        componentDidMount() {
        }

        render() {
            return (<View style={styles.container}>
                <Comp  {...this.props} />
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