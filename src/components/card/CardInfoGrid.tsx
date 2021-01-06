import React, {FC} from 'react';
import {View, Text} from 'react-native';
import color from '../../config/constant/color';

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfoGrid: FC<Props> = props => {
  return (
    <View
      style={{
        margin: 4,
        flex: 1,
        backgroundColor: props.color,
        borderRadius: 6,
        padding: 10,
      }}>
      <Text style={{fontSize: 14, fontWeight: 'bold', color: color.black}}>
        {props.status}
      </Text>
      <View style={{height: 1, backgroundColor: color.black}} />
      <Text style={{fontSize: 26, fontWeight: 'bold', color: color.white}}>
        {props.value}
      </Text>
    </View>
  );
};

export default CardInfoGrid;
