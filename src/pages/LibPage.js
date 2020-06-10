import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {allLibs} from '../allLibs'
import {Page} from '../Page'
import {Text} from '../Text'

export const LibPage = ({lib, onBack, heavyLoad}) => {
  const LibComponent = allLibs[lib].component
  const title = allLibs[lib].name

  return (
    <Page>
      <TopBar onBack={onBack} title={title} />
      <LibComponent heavyLoad={heavyLoad} />
    </Page>
  )
}

const TopBar = ({onBack, title}) => (
  <View
    style={{
      flexDirection: 'row',
      marginVertical: 20,
      paddingHorizontal: 30,
      justifyContent: 'center',
      width: '100%',
    }}>
    <BackButton onPress={onBack} />
    <Text>{title}</Text>
  </View>
)

const BackButton = ({onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{position: 'absolute', left: 30}}
    hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
    <Text>←</Text>
  </TouchableOpacity>
)
