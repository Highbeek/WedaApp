import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../util/WeatherType'

const CurrentWeatherApp = ({ weatherData }) => {
  const {
    Wrapper,
    container,
    tempStyles,
    feel,
    bodyWrapper,
    highLowWrapper,
    highLow,
    description,
    message,
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        Wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${temp} °`}</Text>

        <Text style={feel}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low :${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

export default CurrentWeatherApp

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,

    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: '#000',
    fontSize: 48,
  },
  feel: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: '#000',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
})
