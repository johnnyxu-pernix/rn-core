import * as React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Test Client</Text>
      <Text>{moment().format('LLLL')}</Text>
      <DatePicker
        style={{width: 200}}
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
      <SliderBox
        images={[
          "https://source.unsplash.com/1024x768/?nature",
          "https://source.unsplash.com/1024x768/?water",
          "https://source.unsplash.com/1024x768/?girl",
          "https://source.unsplash.com/1024x768/?tree"
        ]}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
      />
    </View>
  );
}

