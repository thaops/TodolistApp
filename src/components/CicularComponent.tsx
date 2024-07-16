import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import CircularProgress from 'react-native-circular-progress-indicator'

interface Props{
    color?: string,
    value?: number,
    maxvalue?: number,
    redius?: number,
}
const CicularComponent = (props:Props) => {
    const {color,value,maxvaluem,redius} = props
  return (
<CircularProgress value={value} activeStrokeColor={colors.blue} activeStrokeWidth={10} radius={redius??45}/>
  )
}

export default CicularComponent