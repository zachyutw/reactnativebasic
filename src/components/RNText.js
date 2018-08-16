import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
const RNText = (props)=>{
    const {count} = props
   return <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>TESting content
             {count}
        </Text>
    </View>
}

const mapStateToProps = (state, ownProps) => {
    return {
       count:state._template.count
    }
  }
export default  connect(mapStateToProps)(RNText)

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});