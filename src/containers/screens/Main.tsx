import React from 'react';
import {ScrollView} from 'react-native';
import color from '../../config/constant/color';
import CardGlobal from '../organism/main/CardGlobal';
import CardVietNam from '../organism/main/CardVietNam';

const MainScreen = () => {
  return (
    <ScrollView style={{backgroundColor: color.black, flex: 1}}>
      <CardGlobal />
      <CardVietNam />
    </ScrollView>
  );
};
export default MainScreen;
