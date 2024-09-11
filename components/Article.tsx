import { View, Text, Image } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'



export default function Article({ imgUrl, title }: { imgUrl: any, title: string }) {
    return (
        <View className={`w-72 rounded-md bg-white items-center mr-4 border border-custom-border-2`} >
            <Image
                source={imgUrl}
                style={{
                    width: '100%',
                    height: 150,
                }}
                className='rounded-t-md'
            />
            <View className='flex-row justify-between items-center flex-1 p-3 w-full'>
                <View className='flex-col gap-2 justify-between items-start w-3/4'>
                    <Text className='font-medium'>{title} VND</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
        </View>
    )
}