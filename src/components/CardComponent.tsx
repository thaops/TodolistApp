import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';
import { colors } from '../constants/colors';

interface Props{
    children?:ReactNode,
    bgColor?: string,
    styles?:StyleProp<ViewStyle>;
}
const CardComponent = (props:Props) => {
    const {children,bgColor,styles} = props
  return (
    
    <View style={[globalStyles.inbutSection,{backgroundColor:bgColor??colors.blue, padding:12}, styles]}>
      {children}
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({})