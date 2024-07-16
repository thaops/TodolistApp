import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { Edit2 } from 'iconsax-react-native'
import { colors } from '../constants/colors'

interface Props{
    chidren?: ReactNode,
    onPress?: () => void,
    bgColor?:string,
    colorIcon?:string,
}
const EditComponent = (props:Props) => {
    const {chidren,onPress,bgColor,colorIcon} = props
  return (
    
    <TouchableOpacity style={{borderRadius:100,
    backgroundColor:'rgba(0,0,0,0.2)',
    padding:8,
    }}>
        <Edit2 size="24" color={colors.decs}/>
    </TouchableOpacity>
    

  )
}

export default EditComponent