import React from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import CardInfo from '../../components/card/CardInfo';
import color from '../../config/constant/color';
import {Image} from 'react-native';

const MapScreen = () => {
  return (
    <ScrollView style={{backgroundColor: color.black, flex: 1}}>
    <View
      style={{
        backgroundColor: color.pink,
        margin: 10,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
        
        <Image
              style={{width: 300, height: 640}}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/COVID-19_Pandemic_Cases_in_Vietnam.svg/1200px-COVID-19_Pandemic_Cases_in_Vietnam.svg.png',
              }}
            />
           
    </View>
  </ScrollView>
  );
};
export default MapScreen;
