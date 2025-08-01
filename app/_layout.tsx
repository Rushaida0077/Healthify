import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
<<<<<<< HEAD
import React, { useState } from "react";
import { UserContext } from "./../context/UserContext";
=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
<<<<<<< HEAD
const [user, setUser]= useState();
=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95

  return (
    
 <ConvexProvider client={convex}>
<<<<<<< HEAD
  <UserContext.Provider value={{user, setUser}}>
    
=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
    <Stack screenOptions={{
       headerShown: false
        }}>
      <Stack.Screen name="index" />
    </Stack>
<<<<<<< HEAD
  </UserContext.Provider>
=======
>>>>>>> 395688a826d18577a85459a2f90fe9593bc13b95
     </ConvexProvider>
  );
}

