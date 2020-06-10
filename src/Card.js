import React, {useState} from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {pink, collapsedHeight, initiallyExpanded} from './constants'
import {HeavyLoad} from './HeavyLoad'

export const Card = ({expandable, heavyLoad, height}) => {
  const [showExpandIcon, setShowExpandIcon] = useState(!initiallyExpanded)
  const icon = showExpandIcon ? 'ios-arrow-up' : 'ios-arrow-down'

  const onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    setShowExpandIcon(height > collapsedHeight)
  }

  return (
    <>
      {heavyLoad && <HeavyLoad />}
      <View
        pointerEvents={'box-none'}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          width: '100%',
          minHeight: collapsedHeight,
        }}
        onLayout={onLayout}>
        <View
          style={{
            height: 15,
            width: 100,
            backgroundColor: 'lightgray',
          }}
        />
        {expandable && <Icon name={icon} size={30} color={pink} />}
      </View>
    </>
  )
}
