import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

export default function Sticker_func({ title, imgUrl, custom }: { title: string, imgUrl: any, custom?: string }) {

    return (
        <View className='flex-col gap-2 items-center mb-4 '>
            <View className='w-16 h-16 bg-white rounded-2xl shadow-ccc-color shadow-sm justify-center items-center'>
                <Image
                    source={imgUrl}
                    className={`${custom != null ? custom : "w-full h-full"}`}
                />
            </View>
            <Text className=' text-center text-xs '
                style={{
                    width: 77,
                    fontSize: 11,
                    fontWeight: 500
                }}
            >{title}</Text>
        </View>
    )
}