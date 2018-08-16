import React from 'react';
import {connect} from 'react-redux';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {Text,StyleSheet,Platform} from 'react-native';
import {Router, Scene,Drawer, Stack,Tabs,Overlay,Reducer, Modal,Lightbox,Actions} from 'react-native-router-flux';
import Home from '../containers/Home';
import Hello from '../containers/Hello';
import About from '../containers/About';
import DrawerComp from '../containers/DrawerComp';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('reducer: ACTION:', action);
        return defaultReducer(state, action);
    };
};

const stateHandler = (prevState, newState, action) => {
    // console.log('onStateChange: ACTION:', action);
};  
const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

const TabIcon = ({ selected, title }) => {
    return <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>;
}

const TabsNav = ()=>{
    return 
}

 const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

class RoutersComponet extends React.Component {
    _handleDrawer = ()=>{
        console.log("click");
        Actions.drawerOpen()
    }

    render(){
        return (<Router createReducer={reducerCreate} onStateChange={stateHandler} getSceneStyle={getSceneStyle}>
            <Overlay key="overlay">
            <Modal key="modal" hideNavBar transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>
            <Lightbox key="lightbox">
                <Stack key="root"   titleStyle={{ alignSelf: 'center' }}>
                    <Scene hideNavBar panHandlers={null}>
                        <Tabs
                            key="tabbar"
                            backToInitial
                            swipeEnabled
                            showLabel={false}
                            tabBarStyle={styles.tabBarStyle}
                            activeBackgroundColor="white"
                            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"
                        >

                            <Stack
                                key="tab_1"
                                title="Tab #1"
                                tabBarLabel="TAB #1"
                                inactiveBackgroundColor="#FFF"
                                activeBackgroundColor="#DDD"
                                icon={TabIcon}
                                hideTabBar
                                navigationBarStyle={{ backgroundColor: 'green' }}
                                titleStyle={{ color: 'white', alignSelf: 'center' }}
                            >
                                <Scene key="tab_1_1" component={Home} title="Tab #1_1" hideTabBar onRight={() => alert('Right button')} rightTitle="Right" />
                                <Scene key="tab_1_2" component={Hello} title="Tab #1_2" back titleStyle={{ color: 'black', alignSelf: 'center' }} />
                                <Drawer hideNavBar key="drawer" contentComponent={DrawerComp}  drawerWidth={300}>
                                    <Scene key="home2"  component={Home} title="首页"/>
                                </Drawer> 
                            </Stack>

                            <Stack key="tab_2" title="Tab #2" icon={TabIcon} initial>
                                <Scene key="tab_2_1" component={Hello} title="Tab #2_1" renderRightButton={() => <Text>Right</Text>} />
                                <Scene key="tab_2_2" component={About} title="Tab #2_2" back onBack={() => alert('onBack button!')} hideDrawerButton backTitle="Back!" panHandlers={null} />
                            </Stack>

                            <Stack key="tab_3" icon={TabIcon} title="Tab #3">
                                <Scene key="tab_3_1" component={About} rightTitle="Right3" onRight={this._handleDrawer } />
                            </Stack>
                            <Scene key="tab_4_1" component={Hello} title="Tab #4" hideNavBar icon={TabIcon} />
                            <Stack key="tab_5" icon={TabIcon} title="Tab #5">
                                <Scene key="tab_5_1" component={About} />
                            </Stack>
                        </Tabs>
                        </Scene>
                        <Scene key="home" component={Home} icon={TabIcon}   />
                        <Scene key="hello" component={Hello} icon={TabIcon} title="Hello" />
                        {/* <Scene key="about" component={About} icon={TabIcon} title="About"/> */}                      
                            {/* <Scene key="p1" title="Ooo" icon={TabIcon}  >
                            </Scene> 
                            <Scene key="p2" title="oOo" icon={TabIcon}  >
                                <Scene key="about" component={About} icon={TabIcon} title="About"/>
                            </Scene> 
                            <Scene key="p3" title="ooO" icon={TabIcon}   hideNavBar>
                                <Scene key="hello" component={Hello} icon={TabIcon} title="Hello" />
                                <Scene key="home" component={Home} icon={TabIcon} title="Home"  />
                            </Scene>             */}       
                          
                            </Stack>    
                        </Lightbox>
                    </Modal>  
                </Overlay>   
            </Router>
        )
    }
        
}

export default connect()(RoutersComponet)