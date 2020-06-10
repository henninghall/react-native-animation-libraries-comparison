import React, {useState} from 'react'
import {Switch, TouchableOpacity, View} from 'react-native'
import {Page} from '../Page'
import {Text} from '../Text'
import {allLibs} from '../allLibs'
import {pink} from '../constants'

export const MainPage = ({setLib, heavyLoad, setHeavyLoad}) => {
  return (
    <Page style={{justifyContent: 'space-around'}}>
      <View style={{alignItems: 'center'}}>
        {Object.entries(allLibs).map(([key, {name}]) => (
          <TouchableOpacity
            onPress={() => setLib(key)}
            key={key}
            style={{padding: 10}}>
            <Text>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15}}>Simulate heavy load</Text>
        <View style={{height: 15}} />
        <Switch
          onValueChange={setHeavyLoad}
          value={heavyLoad}
          thumbColor={'white'}
          ios_backgroundColor={'rgba(255,255,255,0.5)'}
          trackColor={{true: pink, false: 'rgba(255,255,255,0.5)'}}
        />
      </View>
    </Page>
  )
}
