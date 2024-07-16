import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'

interface Props{
    title?:string,
    back?:boolean,
    right?:ReactNode,
    children: ReactNode
}
const ContainerComponen = (props:Props) => {
    const {title,back,right,children} = props
  return (
    <ScrollView style={[globalStyles.container]}>
      {children}
    </ScrollView>
  )
}

export default ContainerComponen

const styles = StyleSheet.create({})