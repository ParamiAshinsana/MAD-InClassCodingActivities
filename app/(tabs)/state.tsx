import { View, Text, Button ,TextInput,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';

export default function state() {


  const [number, setNumber] = useState(100);

  return (
    <View>
      <Text>useState</Text>
      <Text>{number}</Text>
      
      <View>

      <Button title='+' onPress={()=> {setNumber(number+1)}}/>
      <Button title='-' onPress={()=> {setNumber(number-1)}}/>

        {/* <Button
          onPress={() => {setNumber{number+1}}}
          title="+"
          color="#841584"
        />

        <Button
           onPress={() => {setNumber{number+1}}}
          title="-"
          color="red"
        /> */}

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  messageIcon: {
    marginLeft: 10,
  },
});