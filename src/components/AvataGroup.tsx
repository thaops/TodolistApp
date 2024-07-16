import { View, Text, Image } from 'react-native'
import React from 'react'
import RowComponent from './RowComponen'
import TextComponent from './TextComponent'
import { colors } from '../constants/colors'


const AvataGroup = () => {
    const avataLength = 10;
    const UrlAvata = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4bDyDcxoLbYIk1pt0xwPOcn6Z7LVdik9jg&s';
    const avataStyle = {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: colors.blue,
        borderWidth: 2,
        borderColor: colors.decs
    }
    return (
        <RowComponent justify='flex-start'>
            {Array.from({ length: avataLength }).map((item, index) => (
                index < 3 && (
                    <Image
                        source={{ uri: UrlAvata }}
                        key={`image${index}`}
                        style={[avataStyle,{marginLeft: index > 0 ? -10 : 0,}]}
                    />
                )

            ))}

            {avataLength > 4}{
                <View style={[avataStyle,{backgroundColor:colors.gray,justifyContent:'center',alignItems:'center', marginLeft:-10}]}>
                    <TextComponent text={`+ ${avataLength - 3 > 9 ? 9 : avataLength - 3}`} size={12}/>
                </View>
            }
        </RowComponent>
    )
}

export default AvataGroup