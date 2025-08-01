<<<<<<< HEAD
// app/auth/SignUp.jsx

import { useMutation } from 'convex/react';
import { Link } from 'expo-router';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { UserContext } from '../../context/UserContext'; // ✅ এই লাইন যোগ
import { api } from '../../convex/_generated/api';
=======
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
import { app } from '../../services/FirebaseConfig';

const auth = getAuth(app);

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const createNewUser = useMutation(api.User.CreateNewUser);
  const { user, setUser } = useContext(UserContext); // ✅ useContext ঠিকমতো কাজ করবে এখন

  const onSignUp = async () => {
=======

  const onSignUp = () => {
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
    if (!name || !email || !password) {
      Alert.alert('Missing Fields!', 'Enter all field values');
      return;
    }
<<<<<<< HEAD

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        const result = await createNewUser({
          name: name,
          email: email
        });
        console.log('User created in Convex:', result);
        setUser(result);
      }

    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      Alert.alert('Sign Up Error', errorMessage);
    }
  };

  return (
    <View style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
      <Image 
        source={require('./../../assets/images/logo.png')} 
        style={{ width: 150, height: 150, marginTop: 60 }}
      />
      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
        Create New Account
      </Text>

      <View style={{ marginTop: 20, width: '100%' }}>
        <Input placeholder="Full Name" onChangeText={setName} />
        <Input placeholder="Email" onChangeText={setEmail} />
        <Input placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
      </View>

      <View style={{ marginTop: 15, width: '100%' }}>
        <Button title="Create Account" onPress={onSignUp} />
        <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 15 }}>
          Already have an account?
        </Text>
        <Link href="/auth/SignIn">
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 5, fontWeight: 'bold' }}>
            Sign in here
          </Text>
=======
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
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
        </Link>
      </View>
    </View>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
