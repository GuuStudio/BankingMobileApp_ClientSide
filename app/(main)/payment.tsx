import { View, Text, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import { SIGNIN_BACKGROUND } from '@/constants/Background'
import { LinearGradient } from 'expo-linear-gradient'
import { payments, transfers } from '@/constants/PaymentArrays'
import Sticker_func from '@/components/sticker_func'
import CardSquare from '@/components/CardSquare'

const Payment = () => {
    return (
        <View
            className='bg-main-500'
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                className='h-full'
                style={{
                    marginTop: 110
                }}
            >
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
                >
                    <View className=' flex-row justify-between items-center px-6 pt-4 mt-6'>
                        <Text className='text-black text-2xl font-medium'>Payment {'\n'}& transfer</Text>
                        <View className='p-3  shadow shadow-main-300 border border-custom-border-3 rounded-full justify-center'>
                            <Image
                                source={require('../../assets/images/scanner.png')}
                                style={{
                                    width: 24,
                                    height: 24
                                }}
                            />
                        </View>
                    </View>
                    {/* payment */}
                    <View className='h-20 flex-row justify-between items-center px-6 pt-4'>
                        <Text className='text-black text-xl font-medium'>Payment</Text>
                        <View className='px-3 py-2 border border-custom-color rounded-3xl justify-center'>
                            <Text className='text-custom-color px-2'>All</Text>
                        </View>
                    </View>
                    <View >
                        <View className='flex-row flex-wrap py-5 px-8 justify-between ' >
                            {payments.map((item) => {
                                return (
                                    <Sticker_func key={item.id} title={item.title} imgUrl={item.img_url} custom='w-1/2 h-1/2' />
                                )
                            })}
                        </View>
                    </View>
                    {/* transfer */}
                    <View className='h-20  px-6 pt-4'>
                        <Text className='text-black text-xl font-medium '>Transfer</Text>
                    </View>
                    <View className='pb-52'>
                        <View className='flex-row px-8 justify-between ' >
                            {transfers.map((item, index) => {
                                return (
                                    <CardSquare key={index} title={item.title} imgUrl={item.imgUrl} custom='min-w-28 h-28 bg-white' />
                                )
                            })}
                        </View>
                    </View>


                </LinearGradient>
            </ScrollView>
        </ View>
    )
}

export default Payment