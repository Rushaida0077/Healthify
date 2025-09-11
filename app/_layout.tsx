import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Slot } from "expo-router";
import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RefreshDataContext } from "../context/RefreshDataContext";

export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
  });

  const [user, setUser] = useState();
  const [refreshData, setRefreshData] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexProvider client={convex}>
        <UserContext.Provider value={{ user, setUser }}>
          <RefreshDataContext.Provider value={{refreshData, setRefreshData}}>
          <Slot />
          </RefreshDataContext.Provider>
        </UserContext.Provider>
      </ConvexProvider>
    </GestureHandlerRootView>
  );
}
