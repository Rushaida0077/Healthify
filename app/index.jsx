import { useConvex } from "convex/react";
import { useRouter } from 'expo-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";
import { UserContext } from "../context/UserContext";
import { Dimensions, Image, Text, View } from 'react-native';
import Button from '../components/shared/Button';
import { api } from '../convex/_generated/api';
import Colors from '../shared/Colors';
import { useEffect, useContext } from "react";

export default function Index() {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const convex = useConvex();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userInfo) => {
      if (!userInfo?.email) return;

      const userData = await convex.query(api.User.GetUser, {
        email: userInfo.email,
      });
      console.log("Loaded user:", userData);
      setUser(userData);

      // ✅ Redirect based on whether user has preferences
      if (!userData?.weight || !userData?.height || !userData?.goal) {
        router.replace("/preferance"); // missing preferences → preference page
      } else {
        router.replace("/(tabs)/Home"); // preferences exist → home
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/landing.jpg')}
        style={{
          width: '100%',
          height: Dimensions.get('screen').height,
          position: 'absolute',
        }}
      />

      {/* Overlay Layer */}
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          padding: 20,
        }}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 150,
            height: 150,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.WHITE,
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          Healthify
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: Colors.WHITE,
            opacity: 0.8,
            marginBottom: 40,
          }}
        >
          🌿 Healthify – Your Smart Path to a Healthier Life 🍎{'\n'}
          Discover personalized diet plans, track your meals, and embrace a fitter lifestyle—all in one place.
        </Text>
      </View>

      {/* Button container */}
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 20,
          padding: 20,
        }}
      >
        <Button
          title="Get Started"
          onPress={() => {
            console.log('Button Pressed');
            router.push('/auth/SignIn');
          }}
        />
      </View>
    </View>
  );
}
