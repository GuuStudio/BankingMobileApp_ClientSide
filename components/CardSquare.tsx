import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CardSquare({ imgUrl, title, custom }: { imgUrl: any, title: string, custom?: string }) {
    return (
        <View
            className={`border border-custom-border-2 shadow-sm shadow-custom-shadow ${custom ? custom : ' w-32 h-32 bg-white'} rounded-md  flex-col justify-between p-4 mr-4`}
        >
            <Image source={imgUrl}
                style={{
                    width: 30,
                    height: 30
                }}
            />
            <Text className='font-medium text-sm'>{title}</Text>
        </View>
    )
}