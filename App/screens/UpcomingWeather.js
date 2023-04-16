import React from 'react'
import {
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'



const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/cloud1.jpg')}
        style={image}
      >
        

        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_text}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: 'white', height: 2 }} />
          // )}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },

  image: {
    flex: 1,
  },
})
