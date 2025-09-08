import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Slot } from "expo-router";
import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
  });

  const [user, setUser] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexProvider client={convex}>
        <UserContext.Provider value={{ user, setUser }}>
          <Slot />
        </UserContext.Provider>
      </ConvexProvider>
    </GestureHandlerRootView>
  );
}
