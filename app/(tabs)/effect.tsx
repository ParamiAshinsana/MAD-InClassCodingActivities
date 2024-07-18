import { View, Text, Button ,TextInput,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'


export default function effect() {


    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('Number : ',number);
        return ()=>{console.log("Test Log");
        }
        
    }, [number,]);// depenedency array


  return (
    <View>
      <Text>{number}</Text>


      <Button title='+' onPress={()=> {setNumber(number+1)}}/>
      <Button title='-' onPress={()=> {setNumber(number-1)}}/>

    </View>
  )
}