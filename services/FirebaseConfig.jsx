import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    getReactNativePersistence,
    initializeAuth,
} from "firebase/auth";
import { Platform } from "react-native";

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: "recipesprogressapp.firebaseapp.com",
    projectId: "recipesprogressapp",
    storageBucket: "recipesprogressapp.firebasestorage.app",
    messagingSenderId: "416276620948",
    appId: "1:416276620948:web:2c4c6d24da90653488f681",
    measurementId: "G-Y40YJGFD64",
};

const app = initializeApp(firebaseConfig);
export const auth =
    Platform.OS === "web"
        ? getAuth(app)
        : initializeAuth(app, {
              persistence: getReactNativePersistence(ReactNativeAsyncStorage),
          });
