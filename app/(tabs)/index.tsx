import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function index() {
  return (
    <View>
      <Text style={styles.fontStyle}>index</Text>

      <Button
        onPress={()=>router.push('/profile')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Link href="/profile">View details</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 40,
    height: 178
  },
  tinyLogo: {
    width: 150,
    height: 150,
  }
});
