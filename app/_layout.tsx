import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

  return (
    
 <ConvexProvider client={convex}>
    <Stack screenOptions={{
       headerShown: false
        }}>
      <Stack.Screen name="index" />
    </Stack>
     </ConvexProvider>
  );
}

