import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { navigateTo } from '@/utils/navigation';

export default function HeaderStack({ title }: { title: string }) {
    return (
        <View className='flex-row  w-full justify-between items-center px-6 pt-14 pb-4 bg-white '>
            <Pressable onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" size={24} color={Colors.light.background} />
            </Pressable>
            <Text className='font-medium text-custom-color text-xl'>{title}</Text>
            <Pressable onPress={() => router.replace('/home')}>
                <Ionicons name="home" size={24} color={Colors.light.background} />
            </Pressable>

        </View>
    )
}