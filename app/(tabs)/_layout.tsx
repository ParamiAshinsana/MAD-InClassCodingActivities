import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerTitle:'sfbgd',headerShown:false}} />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="camera" />
      <Tabs.Screen name="test" />
      <Tabs.Screen name="state" />
      <Tabs.Screen name="effect" />
    </Tabs>
  );
}
