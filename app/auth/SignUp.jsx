import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../services/FirebaseConfig';

const auth = getAuth(app);

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Missing Fields!', 'Enter all field values');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

    // Firebase signup or backend signup logic here
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
      }}>Create New Account</Text>

      <View style={{ marginTop: 20, width: '100%' }}>
        <Input placeholder={'Full Name'} onChangeText={setName} />
        <Input placeholder={'Email'} onChangeText={setEmail} />
        <Input placeholder={'Password'} secureTextEntry={true} onChangeText={setPassword} />
      </View>

      <View style={{ marginTop: 15, width: '100%' }}>
        <Button title={'Create Account'} onPress={onSignUp} />
        <Text style={{
          textAlign: 'center',
          fontSize: 16,
          marginTop: 15
        }}>
          Already have an account?
        </Text>
        <Link href={'/auth/SignIn'}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            marginTop: 5,
            fontWeight: 'bold'
          }}>Sign in here</Text>
        </Link>
      </View>
    </View>
  );
}