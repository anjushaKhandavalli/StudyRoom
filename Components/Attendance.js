import * as React from 'react';
import { Text } from 'react-native';
import {Time, Card, Container, Footer, Details, AttendanceText} from './Attendance.style';



const Attendance = () => {
  return (
    <Container>
      <Card>
        <AttendanceText>Attendance is being compiled...</AttendanceText>
        <Footer>
          <Time>Today, 10:30 AM</Time>
        </Footer>
      </Card>
      <Card>
        <Text><AttendanceText>32 of 50</AttendanceText> students attended</Text>
        <Footer>
          <Time>18/10, 10:30 AM</Time>
          <Details>View details</Details>
        </Footer>
      </Card>
      <Card>
        <Text><AttendanceText>32 of 50</AttendanceText> students attended</Text>
        <Footer>
          <Time>18/10, 10:30 AM</Time>
          <Details>View details</Details>
        </Footer>          
      </Card>
    </Container>
  );
};

export default Attendance;