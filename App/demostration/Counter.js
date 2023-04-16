import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const handleAddCount = () => {
    setCount(count + 1)
  }
  const handleMinusCount = () => {
    setCount(count > 0 ? count - 1: count)
  }

  useEffect(()=> {
    console.log(`Our Count value is ${count}`)
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count} </Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          handleAddCount()
        }}
      />

      <Button
        color={'green'}
        title={'decrease the count'}
        onPress={() => handleMinusCount()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent:'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 35,
    marginTop: 25,
  },
})
