import { Link } from 'expo-router';
import { useState } from 'react'; // ✅ Added
import { Alert, Image, Text, View } from 'react-native';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSignIn = () => {
    // if (!email || !password) {
    //   Alert.alert('Missing Fields!', 'Enter All fields values');
    //   return;
    // }
    // ✅ Sign-in logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <View style={{
      display: 'flex',
      alignItems: 'center',
      padding: 20
    }}>
      <Image 
        source={require('./../../assets/images/logo.png')} 
        style={{
          width: 150,
          height: 150,
          marginTop: 60
        }}
      />
      <Text style={{
        fontSize: 35,
        fontWeight: 'bold',
      }}>Welcome Back</Text>

      <View style={{ marginTop: 20, width: '100%' }}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />

      </View>

      <View style={{ marginTop: 15, width: '100%' }}>
        <Button title={'Sign In'} onPress={onSignIn} />
        <Text style={{
          textAlign: 'center',
          fontSize: 16,
          marginTop: 15
        }}>
          Don't have an account?
        </Text>
        <Link href={'/auth/SignUp'}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            marginTop: 5,
            fontWeight: 'bold'
          }}>Create New Account</Text>
        </Link>
      </View>
    </View>
  );
}