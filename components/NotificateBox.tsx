import { View, Text } from 'react-native'
import React from 'react'

export default function NotificateBox({ children, title }: { children: React.JSX.Element, title: string }) {
    return (
        <View className='border border-main-300  w-full rounded-md mt-6'>
            <View className='p-4 w-full bg-main-300 rounded-t-md'>
                <Text className='font-medium'>{title}</Text>
            </View>
            <View className='bg-white p-4 rounded-b-md ' >
                {children}
            </View>
        </View>
    )
}