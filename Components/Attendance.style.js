import styled from 'styled-components/native';
import { Text, View } from 'react-native';

export const Container = styled(View)`
  align-items: center;
  padding-top: 20px;
`;
export const Card = styled(View)`
  flex: 1;
  flex-basis: 100;
  background-color: #fff;
  box-shadow: 0 1px 5px #190000;
  border-radius: 5;
  padding: 15px;
  margin: 0 10px 20px;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Time = styled(Text)`
  color: #989898;
  font-size: 12px;
`;

export const Footer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled(Text)`
  color: #00a699;
`;

export const AttendanceText = styled(Text)`
  font-weight: bold;
  color: #000000;
  font-size: 16px;
`