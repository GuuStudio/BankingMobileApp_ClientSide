import { View, Text } from 'react-native'
import React from 'react'


export default function ImageTab({ children, custom }: { children: any, custom: string }) {
    return (
        <View
            className={`bg-main-400  ${custom ? custom : 'w-72 h-2/3 p-5'} rounded-2xl flex-col justify-between border border-main-400`}
        >
            {children}
        </View>
    )
}