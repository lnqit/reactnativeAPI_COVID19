import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../containers/screens/Main';
import color from '../constant/color';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.black,
        },
        headerTintColor: color.white,
      }}>
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: 'Covid19',
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerLeft: () => (
            <Image
              style={{width: 50, height: 40}}
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2020/02/17/07/19/covid-19-4855688_960_720.png',
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => (
            <TouchableOpacity>
              <Icon name="ios-alert" size={30} color={color.white} />
            </TouchableOpacity>
          ),
        }}
      />
      {/* <Stack.Screen
        name="VietNamDetail"
        component={VietNamDetail}
        options={{
          title: 'Việt Nam',
        }}
      />
       */}
    </Stack.Navigator>
  );
};

export default MainStack;
