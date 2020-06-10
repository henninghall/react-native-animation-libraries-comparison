import React, {useState} from 'react'
import {LayoutAnimation, TouchableOpacity} from 'react-native'
import {CardContainer} from '../CardContainer'

import {
  collapsedHeight,
  expandedHeight,
  initialHeight,
  animationDuration,
} from '../constants'
import {Card} from '../Card'

export const RnLayoutAnimation = ({heavyLoad}) => {
  const [height, setHeight] = useState(initialHeight)

  const onPress = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.easeInEaseOut,
      duration: animationDuration,
    })
    setHeight(height === expandedHeight ? collapsedHeight : expandedHeight)
  }

  return (
    <>
      <CardContainer>
        <Card />
      </CardContainer>

      <CardContainer style={{height}} onPress={onPress}>
        <Card expandable heavyLoad={heavyLoad} />
      </CardContainer>

      <CardContainer>
        <Card />
      </CardContainer>
    </>
  )
}
