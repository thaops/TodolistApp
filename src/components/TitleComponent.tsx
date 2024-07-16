import { View, Text } from 'react-native'
import React from 'react'
import { fontFamilys } from '../constants/fontFamily'
import { globalStyles } from '../styles/globalStyles'
import { colors } from '../constants/colors'

interface Props {
   text?:string,
   size?:number,
   font?: string,
   color?:string,

}
const TitleComponent = (props:Props) => {
    const{text,size,font,color} = props
  return (
    <Text style={[globalStyles.text,{fontFamily:font?? fontFamilys.bold,color:color??colors.decs, fontSize:size??18}]}>
      {text}
    </Text>
  )
}

export default TitleComponent