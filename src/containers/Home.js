import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
class Home extends React.Component {

    _openDrawer = () => {
        // 关闭用 Actions.drawerClose()
        Actions.drawerOpen()
    };

    render() {
        const {count} = this.props
        return <View style={styles.container}>
            <Text
            style={styles.welcome}
            onPress={() => Actions.hello()} // New Code
            >Hello</Text>
            <Button onPress={this._openDrawer} title={'OpenDrawer'} />
        <Text>testting content
            test redux connetion the value should be 0 = {count}
        </Text>
    </View>
    }
   
}

const mapStateToProps = (state, ownProps) => {
    return {
       count:state._template.count
    }
  }
export default  connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BABABA',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});