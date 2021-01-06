import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../../containers/screens/Map';
import CountryScreen from '../../containers/screens/Country';
import MainStack from './MainStack';
import color from '../constant/color';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: color.blackLight,
          },
          activeTintColor: color.white,
        }}>
        <Tab.Screen
          name="Trang Chủ"
          component={MainStack}
          options={{
            tabBarIcon: props => (
              <Icon name="appstore-o" size={26} color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bản đồ"
          component={MapScreen}
          options={{
            tabBarIcon: props => (
              <Icon name="enviroment" size={26} color={props.color} />
            ),
          }}
        />
        <Tab.Screen
          name="Quốc gia"
          component={CountryScreen}
          options={{
            tabBarIcon: props => (
              <Icon name="earth" size={26} color={props.color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
