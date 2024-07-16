import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import RowComponent from './RowComponen';
import TextComponent from './TextComponent';
import SectionComponent from './SectionComponent';
import SpaceComponent from './SpaceComponent';
interface Props {
    size?: 'smail' | 'default' | 'large';
    color?: string,
    percent?: string
}
const ProgressBarComponent = (props: Props) => {
    const { size, color, percent } = props
    return (
        <View>
        <View style={{
            height: 10, width: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: 100
        }}>
            <View style={{
                height: 10, width: percent,
                backgroundColor: color??colors.blue,
                borderRadius: 100
            }}>
            </View>

        </View>
        <SpaceComponent height={8}/>
        <RowComponent>
                <TextComponent text='Progress' size={12}/>
                <TextComponent text='80%' size={12} flex={0}/>
            </RowComponent>
        </View>

    )
}

export default ProgressBarComponent