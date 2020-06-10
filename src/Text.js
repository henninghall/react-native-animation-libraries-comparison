import React from 'react'
import {Text as RnText} from 'react-native'

export const Text = props => (
  <RnText
    {...props}
    style={[
      {
        fontSize: 20,
        color: 'white',
        fontWeight: props.bold ? 'bold' : undefined,
      },
      props.style,
    ]}
  />
)
