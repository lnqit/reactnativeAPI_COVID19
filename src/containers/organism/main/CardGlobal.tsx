import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import color from '../../../config/constant/color';
import CardInfo from '../../../components/card/CardInfo';
import axios from 'axios';
import api from '../../../config/constant/api';

interface CardStatus {
  value: number;
  detail: string;
}

interface CardGlobalState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
}

const CardGlobal = () => {
  const [data, setData] = useState<CardGlobalState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.api);
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
      <Text
        style={{
          marginLeft: 10,
          color: color.white,
          fontSize: 20,
        }}>
        Thế Giới
      </Text>

      <View
        style={{
          backgroundColor: color.blackLight,
          margin: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}>
        {data && (
          <>
            <CardInfo
              color="yellow"
              status="Đã xác nhận"
              value={data.confirmed.value.toLocaleString()}
            />
            <CardInfo
              color="green"
              status="Phục hồi"
              value={data.recovered.value.toLocaleString()}
            />
            <CardInfo
              color="red"
              status="Tử vong"
              value={data.deaths.value.toLocaleString()}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default CardGlobal;
