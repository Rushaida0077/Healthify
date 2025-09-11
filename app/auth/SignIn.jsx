import { useConvex } from "convex/react";
import { Link, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { UserContext } from "../../context/UserContext";
import { api } from "../../convex/_generated/api";
import { auth } from '../../services/FirebaseConfig';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const convex = useConvex();
  const { setUser } = useContext(UserContext);
  const router = useRouter();   

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Missing Fields!", "Enter all field values");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Fetch user from Convex
        const userData = await convex.query(api.User.GetUser, {
          email: email,
        });

        console.log("Fetched user:", userData);
        setUser(userData);

        // 👇 Add redirect logic here
        if (!userData?.weight || !userData?.height || !userData?.goal) {
          // no preferences yet
          router.replace("/preferance");
        } else {
          // preferences exist → go home
          router.replace("/(tabs)/Home");
        }
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert(
          "Incorrect Email & Password",
          "Please enter a valid email and password"
        );
      });
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("./../../assets/images/logo.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 60,
        }}
      />
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
        }}
      >
        Welcome Back
      </Text>

      <View style={{ marginTop: 20, width: "100%" }}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text.trim())} // trim spaces
        />

        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <View style={{ marginTop: 15, width: "100%" }}>
        <Button title={"Sign In"} onPress={onSignIn} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 15,
          }}
        >
          Don't have an account?
        </Text>
        <Link href={"/auth/SignUp"}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 5,
              fontWeight: "bold",
            }}
          >
            Create New Account
          </Text>
        </Link>
      </View>
    </View>
  );
}
