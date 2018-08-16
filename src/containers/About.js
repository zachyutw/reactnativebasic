import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
const About = (props)=>{
    const {count} = props
   return <View style={styles.container}>
        <Text>About</Text>
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
export default  connect(mapStateToProps)(About)

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87ed22',
    },
});