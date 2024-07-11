import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function profile() {
  return (
    <View>
      <Text>profile</Text>
      <Button
        onPress={()=>router.back()}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}