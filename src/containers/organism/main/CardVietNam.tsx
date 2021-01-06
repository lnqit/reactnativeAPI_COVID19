import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../config/constant/color';
import CardInfoGrid from '../../../components/card/CardInfoGrid';
import axios from 'axios';
import api from '../../../config/constant/api';
import {useNavigation} from '@react-navigation/native';

interface CardStatus {
  value: number;
  detail: string;
}

interface CardVietNamState {
  cases: number;
  deaths: number;
  recovered: number;
  todayCases: number;
}

const CardVietNam = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<CardVietNamState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.apiID);
      setData(res.data);
    } catch (e) {
      console.warn('error', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            marginLeft: 10,
            color: color.white,
            fontSize: 20,
          }}>
          Việt Nam
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('VietNamDetail')}>
          <Text
            style={{
              marginRight: 10,
              color: color.white,
              fontSize: 16,
            }}>
        
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: color.blackLight,
          margin: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {data && (
            <>
              <View style={{flex: 1}}>
                <CardInfoGrid
                  color={color.yellow}
                  status="Số ca nhiễm"
                  value={data.cases.toLocaleString()}
                />
                <CardInfoGrid
                  color={color.red}
                  status="Số ca tử vong"
                  value={data.deaths.toLocaleString()}
                />
              </View>
              <View style={{flex: 1}}>
                <CardInfoGrid
                  color={color.teal}
                  status="Số ca bình phục"
                  value={data.recovered.toLocaleString()}
                />
                <CardInfoGrid
                  color={color.deeppink }
                  status="Số ca nhiễm hôm nay"
                  value={data.todayCases.toLocaleString()}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardVietNam;
