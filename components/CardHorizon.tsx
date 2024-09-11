import { View, Text, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type contentProp = {
    title1: string,
    title2: string
}

export default function CardHorizon({ imgUrl, content }: { imgUrl: any, content: contentProp }) {
    return (
        <View className={`rounded-md bg-white p-4 flex-row justify-between items-center mr-4 gap-5 border border-custom-border-2`} >
            <View className='flex-row gap-3'>
                <Image
                    source={imgUrl}
                    style={{
                        width: 85,
                        height: 60,
                    }}
                    className='rounded-md'
                />
                <View className='gap-2 justify-center'>
                    <Text>{content.title1}</Text>
                    <Text className='font-medium'>{content.title2} VND</Text>
                </View>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
    )
}