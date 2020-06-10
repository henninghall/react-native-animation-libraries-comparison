import React from 'react'
import {View, SafeAreaView} from 'react-native'

export const Page = ({children, style}) => (
  <SafeAreaView
    style={{
      backgroundColor: '#3a2db3',
      height: '100%',
    }}>
    <View style={{...style, height: '100%'}}>{children}</View>
  </SafeAreaView>
)
