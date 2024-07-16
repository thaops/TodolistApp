import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

interface Props {
    text?:string,
    color?:string,
    tagStyles?:StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    onPrees?:() => void,
}
const TagComponents = (props:Props) => {
    const { text, color,tagStyles,textStyles,onPrees} = props
  return (
    <TouchableOpacity
    disabled={!onPrees}
     style={[globalStyles.tag,textStyles,{backgroundColor:color?? colors.blue}]}>
      <TextComponent text={ text} styles={ textStyles}/>
    </TouchableOpacity>
  )
}

export default TagComponents