import React, {useRef, useState} from 'react'
import {Transition, Transitioning} from 'react-native-reanimated'
import {Card} from '../Card'
import {CardContainer} from '../CardContainer'
import {
  animationDuration,
  collapsedHeight,
  expandedHeight,
  initialHeight,
} from '../constants'

const transition = (
  <Transition.Change interpolation="easeInOut" durationMs={animationDuration} />
)

export const Reanimated1 = ({heavyLoad}) => {
  const ref = useRef()
  let [height, setHeight] = useState(initialHeight)

  const onPress = () => {
    ref.current.animateNextTransition()
    setHeight(height === expandedHeight ? collapsedHeight : expandedHeight)
  }

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <CardContainer>
        <Card />
      </CardContainer>

      <CardContainer style={{height}} onPress={onPress}>
        <Card expandable heavyLoad={heavyLoad} />
      </CardContainer>

      <CardContainer>
        <Card />
      </CardContainer>
    </Transitioning.View>
  )
}
