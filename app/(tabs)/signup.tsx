import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Link, router } from 'expo-router';
import { auth } from '../../FirebaseConfig';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import  { useState } from 'react'

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <View style={styles.header}>
        <Text style={styles.topic}>Add your details</Text>
      </View>

      

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="First Name*" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Last Name*" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Email*" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password*" />
      </View>

      
      <TouchableOpacity style={styles.button}  onPress={() => router.push('/profile')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 50,
    marginRight: 10,
    // borderWidth: 2,
    // borderColor: '#000',
  },
  topic: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  secondtopic: {
    fontSize: 12,
    fontWeight: '400',
    // marginTop:-1,
  },
  thirdtopic: {
    fontSize: 13,
    fontWeight: '500',
    // marginTop:-1,
    color: '#3d67d1',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#b9babd',
  },
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#660180',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});