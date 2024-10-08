import { View, Text, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import { SIGNIN_BACKGROUND } from '@/constants/Background'
import { LinearGradient } from 'expo-linear-gradient'
import { payments } from '@/constants/PaymentArrays'
import Sticker_func from '@/components/sticker_func'
import NotificateBox from '@/components/NotificateBox'

const More = () => {
    return (
        <View
            className='bg-main-500'
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                className='h-full'
                style={{
                    marginTop: 110,
                }}
                contentContainerStyle={{
                    paddingBottom: 70
                }}
            >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
                >
                    <View className='w-full px-6 pb-40'>
                        <View className=' flex-row justify-between items-center  pt-4 mt-6 mb-6'>
                            <Text className='text-black text-2xl font-medium'>Payment {'\n'}& transfer</Text>
                            <View className='p-3  shadow shadow-main-300 border border-custom-border-3 rounded-full justify-center'>
                                <Image
                                    source={require('../../assets/images/setting.png')}
                                    style={{
                                        width: 24,
                                        height: 24
                                    }}
                                />
                            </View>
                        </View>
                        {/* payment */}

                        <NotificateBox title='Quick access'>
                            <View className='flex-row flex-wrap items-center'>
                                {payments.map((item) => {
                                    return (
                                        <Sticker_func key={item.id} title={item.title} imgUrl={item.img_url} custom='w-1/2 h-1/2' />
                                    )
                                })}
                            </View>
                        </NotificateBox>
                        <NotificateBox title='Deposit & invest'>
                            <View className='flex-row flex-wrap items-center'>
                                {payments.map((item) => {
                                    return (
                                        <Sticker_func key={item.id} title={item.title} imgUrl={item.img_url} custom='w-1/2 h-1/2' />
                                    )
                                })}
                            </View>
                        </NotificateBox>
                    </View>

                </LinearGradient>
            </ScrollView>
        </ View>
    )
}

export default More