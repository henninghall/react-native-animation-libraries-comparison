import {Dimensions} from 'react-native'

const slices = 1000

export const columns = new Array(slices).fill(undefined).map((_, i) => ({
  i,
  width: Dimensions.get('screen').width / slices,
}))
