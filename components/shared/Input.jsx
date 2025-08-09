import { TextInput } from 'react-native';

export default function Input({ placeholder, secureTextEntry = false, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      style={{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        paddingVertical: 20,
        width: '100%',
        marginTop: 15,
      }}
    />
  );
}
