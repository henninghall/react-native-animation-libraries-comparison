import React from 'react'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'
import {Card} from '../Card'
import {CardContainer} from '../CardContainer'
import {animationDuration, collapsedHeight, expandedHeight} from '../constants'

export const Reanimated2 = ({heavyLoad}) => {
  const height = useSharedValue(collapsedHeight)

  const config = {
    duration: animationDuration,
    easing: Easing.inOut(Easing.ease),
  }

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, config),
    }
  })

  const onPress = () => {
    height.value =
      height.value === expandedHeight ? collapsedHeight : expandedHeight
  }

  return (
    <>
      <CardContainer>
        <Card />
      </CardContainer>

      <CardContainer onPress={onPress}>
        <Animated.View style={style}>
          <Card expandable heavyLoad={heavyLoad} />
        </Animated.View>
      </CardContainer>

      <CardContainer>
        <Card />
      </CardContainer>
    </>
  )
}
