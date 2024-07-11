import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack>
      <Stack.Screen name="index" options={{headerTitle:'sfbgd',headerShown:false}} />
      <Stack.Screen name="profile" options={{headerTitle:'profile screen',headerStyle: { backgroundColor: 'blue'}}} />
    </Stack>

    </Stack>
  );
}
