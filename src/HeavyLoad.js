import React from 'react'
import {View} from 'react-native'

const componentsToRender = 5000

export const HeavyLoad = () => {
  return (
    <View
      pointerEvents={'box-none'}
      style={{
        flexDirection: 'row',
        maxWidth: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: '100%',
          backgroundColor: '#f8f9f8',
          borderRadius: 15,
          width: '100%',
        }}>
        {Array.from({length: componentsToRender}).map((_, i) => (
          <View
            key={i}
            style={{
              height: '100%',
              width: `${100 / componentsToRender}%`,
            }}
          />
        ))}
      </View>
    </View>
  )
}
