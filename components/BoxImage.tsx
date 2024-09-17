import { View, Text, Image } from 'react-native'
import React from 'react'

export default function BoxImage({ imgUrl, custom }: { imgUrl: any, custom?: string }) {
    return (
        <View className={`bg-black ${custom != null ? custom : 'w-80 h-44 mr-6'} rounded-2xl shadow-xs shadow-main-300`}>
            <Image
                className='rounded-2xl'
                source={imgUrl}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
        </View>
    )
}