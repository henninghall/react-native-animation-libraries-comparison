import React from 'react'
import {TouchableOpacity} from 'react-native'

export const CardContainer = ({children, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.9}
      style={[
        {
          backgroundColor: 'white',
          margin: 20,
          borderRadius: 15,
        },
        style,
      ]}>
      {children}
    </TouchableOpacity>
  )
}
