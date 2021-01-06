import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import color from '../../config/constant/color';
import axios from 'axios';
import api from '../../config/constant/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

interface CountryCase{
  name: string,
  iso2: string,
  iso3: string,
  countryRegion:string,
  confirmed:number,
  deaths:number,
  active:number
}

const CountryScreen = () => {
  const [country,setData] = useState<CountryCase[]>([]);
  const renderItem = ({item}) => {
    return(
      <ScrollView style={{backgroundColor: color.black, flex: 1}}>
      <View  style={{
          backgroundColor: color.white, 
          margin: 4, 
          padding: 10, 
          borderRadius:4}}>
        <Text style={{
          fontSize: 18, 
          fontWeight: 'bold'}}>
            Quốc gia: {item.countryRegion}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{
            flex: 1, 
            backgroundColor: color.chartreuse, 
            color: color.white,
            padding: 4,
            fontWeight: 'bold'
            }}>
             Đã xác nhận: {item.confirmed}
          </Text>
          <Text style={{
            flex: 1,  
            backgroundColor: color.red, 
            color: color.white,
            padding: 4,
            fontWeight: 'bold'
            }}>
             Đã tử vong: {item.deaths}
          </Text>
          <Text style={{
            flex: 1,  
            backgroundColor: color.orange, 
            color: color.white,
            padding: 4,
            fontWeight: 'bold'
            }}>
             Đã Chửa khỏi: {item.active}
          </Text>
        </View>
      </View>
      </ScrollView>
    )
  };

  const getData = async () => {
    try {
      let res = await axios.get(api.api+'/deaths');
      setData(res.data);
    } catch (e) {
      console.warn('error', e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontWeight: 'bold',fontSize: 24, textAlign: 'center' }}>Tất Cả Quốc Gia</Text>
      {console.warn(country)}
      <FlatList  
        data={country} 
        renderItem={renderItem} 
        keyExtractor={(_, i)=> i.toString()}
      />
    </SafeAreaView>
    
  );
};
export default CountryScreen;


