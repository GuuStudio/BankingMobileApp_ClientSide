import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import HeaderStack from '@/components/HeaderStack'

export default function ProfileLayout() {
    return (
        <Stack
        >
            <Stack.Screen name='profile' options={{ header: () => <HeaderStack title={'Profile'} /> }} />
        </Stack>
    )
}