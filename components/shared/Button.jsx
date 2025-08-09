import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../shared/Colors'; // path thik ache kina check koro

// Props theke title and onPress nite hobe
export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      }}
      onPress={onPress} // ekhane bahirer onPress use hocche
    >
      <Text
        style={{
          fontSize: 18,
          color: Colors.WHITE,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {title}  {/* dynamic title */}
      </Text>
    </TouchableOpacity>
  );
}