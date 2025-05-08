import React from 'react';
import style from './style'
import {Text} from 'react-native';
import moment from 'moment';

type LastConvertorProps = {
  date: Date;
  base: string;
  quote: string;
  conversionRate: number;
};

const LastConvertor: React.FC<LastConvertorProps> = ({date, base, quote, conversionRate }) => {
    // function moment(date: object) {
    //     throw new Error('Function not implemented.');
    // }

  return (
    <Text style={style.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
  );
};

export default LastConvertor;