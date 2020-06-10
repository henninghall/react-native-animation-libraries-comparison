import React, {useRef} from 'react'
import {Animated, TouchableOpacity} from 'react-native'
import {Card} from '../Card'
import {CardContainer} from '../CardContainer'

import {
  animationDuration,
  collapsedHeight,
  expandedHeight,
  initialHeight,
} from '../constants'

export const RNAnimated = ({heavyLoad}) => {
  const height = useRef(new Animated.Value(initialHeight)).current

  const onPress = () => {
    Animated.timing(height, {
      toValue:
        height._value === collapsedHeight ? expandedHeight : collapsedHeight,
      duration: animationDuration,
      useNativeDriver: false, // native driven animation is not supported for height
    }).start()
  }

  return (
    <>
      <CardContainer>
        <Card />
      </CardContainer>

      <CardContainer onPress={onPress}>
        <Animated.View style={{height}}>
          <Card expandable heavyLoad={heavyLoad} />
        </Animated.View>
      </CardContainer>

      <CardContainer>
        <Card />
      </CardContainer>
    </>
  )
}
