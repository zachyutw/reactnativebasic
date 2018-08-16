import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
const Hello = (props)=>{
    const {count} = props
   return <View style={styles.container}>
         <Text>Hello</Text>
        <Text>testting content
            test redux connetion the value should be 0 = {count}
        </Text>
    </View>
}

const mapStateToProps = (state, ownProps) => {
    return {
       count:state._template.count
    }
  }
export default  connect(mapStateToProps)(Hello)

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});