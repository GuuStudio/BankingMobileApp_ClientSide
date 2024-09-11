import { View, Text } from 'react-native'
import React from 'react'
import { BORDER_CUSTOM } from '@/constants/Border'

export default function ImageTab({ children, custom }: { children: any, custom: string }) {
    return (
        <View
            className={`bg-custom-bg-darkblue-opacity  ${custom ? custom : 'w-72 h-2/3 p-5'} rounded-2xl flex-col justify-between border border-custom-border`}
        >
            {children}
        </View>
    )
}