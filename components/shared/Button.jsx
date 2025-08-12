import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../shared/Colors'; // path thik ache kina check koro

// Props theke title and onPress nite hobe
export default function Button({ title, onPress, icon }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        borderRadius: 10
      }}>
      <Text
        style={{
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: 'center'
          
        }}>{icon} {title}</Text>
    </TouchableOpacity>
  );
}