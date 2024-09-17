import { View, Text, ImageBackground, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { SIGNIN_BACKGROUND } from '@/constants/Background'
import { LinearGradient } from 'expo-linear-gradient'
import { card_Horizons, card_Squares_1, card_Vertical_1, linkCards, vouchers } from '@/constants/CardArrays'
import CardHorizon from '@/components/CardHorizon'
import CardSquare from '@/components/CardSquare'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import BoxImage from '@/components/BoxImage'
import Article from '@/components/Article'
import { Colors } from '@/constants/Colors'

const Voucher = () => {
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
                contentContainerStyle={{
                    paddingBottom: 70
                }}
            >
                {/* imge shopping mall */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
                >

                    <View className='h-20 flex-row justify-between items-center pt-4 mt-6 px-6'>
                        <Text className='text-black text-2xl font-medium'>Voucher</Text>
                    </View>
                    <View className='px-6'>
                        <View className=' py-3 w-full bg-white rounded-md border border-main-400 flex-row justify-between items-center p-4'>
                            <View className='flex-col flex-1'>
                                <Text className='font-medium'>
                                    LOYALTY POINT
                                </Text>
                                <Text className='font-bold text-2xl'>
                                    50
                                </Text>
                                <View className='flex-row'>
                                    <Text className='text-custom-color font-bold'>Earn Point</Text>
                                    <MaterialIcons name="navigate-next" size={24} color={Colors.light.background} />
                                </View>
                            </View>
                            <View className='bg-custom-color rounded-full py-2 px-4'>
                                <Text className='text-white font-mediums'>Redeem Gift</Text>
                            </View>
                        </View>
                        <View className='w-full rounded-2xl mt-10 ' style={{ position: 'relative' }} >
                            <Image
                                source={require('../../assets/images/slotmachine.jpg')}
                                style={{
                                    width: '100%',
                                    height: 400,
                                }}
                                className=' rounded-2xl'
                            >
                            </Image>
                            <View className='w-full h-full flex-col justify-end p-4 gap-5 items-center'
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <Text className='text-white font-medium '>Quay thật sung - Trúng cực khủng</Text>
                                <Text className='text-main-100 font-medium text-xs'>Cơ hội nhận thưởng lên đến 500 triệu</Text>
                                <View className='flex-row border border-main-300 px-4 py-5 rounded-xl w-full justify-between items-center'
                                    style={{
                                        backgroundColor: 'rgba(255,255,255, 0.2)'
                                    }}
                                >
                                    <Image
                                        source={require('../../assets/images/wheelcasino.png')}
                                        style={{
                                            width: 40,
                                            height: 30,
                                        }}
                                    />
                                    <Text className='text-white text-xs'>Thu thập lượt quay</Text>
                                    <View className='px-4 py-2 bg-white rounded-full'>
                                        <Text className='text-custom-color text-xs font-medium'>Xem ngay</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    {/* Link card list */}
                    <View

                    >
                        {/* Title */}
                        <View className='flex-row px-6 items-center justify-between'>
                            <View className='flex-row gap-3 py-8 items-center'>
                                <Text className='font-medium text-xl'>Partner Offers</Text>
                            </View>
                            <View className='border-2 border-custom-color py-2 px-4 rounded-full  '>
                                <Text className='text-custom-color font-medium'>All</Text>
                            </View>
                        </View>
                        <View className='pl-6 pb-8'>
                            <FlatList
                                className='gap-3'
                                contentContainerStyle={{
                                    paddingRight: 3
                                }}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={linkCards}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => <Article imgUrl={item.imgUrl} title={item.title} />}
                            />
                        </View>
                    </View>
                    {/* Voucher list */}
                    <View
                        className='pb-40'
                    >
                        {/* Title */}
                        <View className='flex-row px-6 items-center justify-between'>
                            <View className='flex-row gap-3 py-8 items-center'>
                                <Text className='font-medium text-xl'>Cashback shopping</Text>
                            </View>
                            <View className='border-2 border-custom-color py-2 px-4 rounded-full '>
                                <Text className='text-custom-color font-medium'>All</Text>
                            </View>
                        </View>
                        <View className='pl-6 pb-8'>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={vouchers}
                                renderItem={({ item }) => <BoxImage imgUrl={item} custom='w-96 h-40 mr-6' />}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

export default Voucher