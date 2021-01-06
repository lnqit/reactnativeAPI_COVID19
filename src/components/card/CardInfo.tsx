import React, {FC} from 'react';
import {View, Text} from 'react-native';
import color from '../../config/constant/color';

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfo: FC<Props> = props => {
  return (
    <View style={{marginVertical: 4}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: props.color}}>
        {props.status}
      </Text>
      <Text style={{fontSize: 26, color: color.white}}>{props.value}</Text>
    </View>
  );
};

export default CardInfo;
