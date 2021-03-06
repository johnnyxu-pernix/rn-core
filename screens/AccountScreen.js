import * as React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

export default AccountScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen</Text>
      <Text>{moment().format('LLLL')}</Text>
      <DatePicker
        style={{width: 100}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {console.log(date)}}
      />
    </View>
  );
}
