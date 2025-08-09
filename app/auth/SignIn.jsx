import { useConvex } from "convex/react";
import { useContext, useState } from "react";
import { Link } from "expo-router";
import { auth } from '../../services/FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert, Image, Text, View } from "react-native";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { UserContext } from "../../context/UserContext";
import { api } from "../../convex/_generated/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const convex = useConvex();
  const { user, setUser } = useContext(UserContext);

const onSignIn = () => {
     if (!email || !password) {
     Alert.alert('Missing Fields!', 'Enter All fields values');
      return;
     }
    signInWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const userData= await convex.query(api.User.GetUser, {
      email: email

    })
    console.log(userData);
    setUser(userData);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Alert.alert('Incorrect Email & Password', 'Please enter the valid email and password');
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
