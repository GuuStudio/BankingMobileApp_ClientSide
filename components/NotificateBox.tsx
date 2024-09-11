import { View, Text } from 'react-native'
import React from 'react'

export default function NotificateBox({ children }: { children: React.JSX.Element }) {
    return (
        <View className='border border-custom-border-2 shadow-sm shadow-custom-shadow w-full rounded-md mb-4'>
            <View className='p-3 w-full bg-custom-bg-3 rounded-t-md'>
                <Text className='font-medium'>Quick access</Text>
            </View>
            <View className='bg-white p-4 rounded-b-md ' >
                {children}
            </View>
        </View>
    )
}