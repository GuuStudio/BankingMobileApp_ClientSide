import { View, Text, Image, ImageSourcePropType, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Colors } from '@/constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { profileFunctions } from '@/constants/profileArrays'

const renderProfileFunc = (title: string, imgUrl: ImageSourcePropType) => {
    return (
        <View key={title} className='flex-row justify-between items-center w-full border-b border-custom-color-3 py-6' >
            <View className='flex-row w-3/4 items-center' >
                <Image
                    source={imgUrl}
                    style={{
                        width: 24,
                        height: 24,
                        marginRight: 10
                    }}
                />
                <Text>{title}</Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color={Colors.light.background} />
        </View>)
}

export default function Profile() {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
        >
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View className='px-6 gap-4  w-full h-full'>
                    <View className={`flex-col rounded-md bg-white items-center border border-main-300 p-4 w-full mt-24 gap-2`} >
                        <View className='rounded-full border border-custom-border '
                            style={{
                                marginTop: -70,
                            }}
                        >
                            <Image
                                source={require('../../assets/images/useravt.jpg')}
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 100,
                                }}
                            />
                            <View className='bg-gray-100 shadow-md shadow-custom-shadow w-10 h-10 rounded-full justify-center items-center'
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }} >
                                <FontAwesome6 name="user-pen" size={18} color="black" />
                            </View>
                        </View>

                        <Text className='text-2xl mt-4 font-medium'>User name</Text>
                        <View className='flex-row gap-2'>
                            <Text>User ID:</Text>
                            <Text className='text-custom-color'>0367285666</Text>
                        </View>
                        <View className='flex-row w-full justify-between mt-2 items-center'>
                            <View className='flex-row bg-gray-200 p-2 rounded-md w-44 gap-2' >
                                <Image
                                    source={require('../../assets/images/shield.png')}
                                    style={{
                                        width: 24,
                                        height: 24
                                    }}
                                />
                                <Text >Activate for Protection</Text>
                            </View>
                            <View className='bg-white  border border-main-300 flex-row  p-2 rounded-md w-44 gap-2' >
                                <Image
                                    source={require('../../assets/images/crown.png')}
                                    style={{
                                        width: 28,
                                        height: 24
                                    }}
                                />
                                <Text className='flex-1'>MB Membership</Text>
                            </View>
                        </View>
                        <View className='mt-10 w-full bg-white rounded-md border border-main-300 flex-row justify-between items-center p-4'>
                            <View className='flex-col flex-1'>
                                <Text className='font-medium'>
                                    LOYALTY POINT
                                </Text>
                                <Text className='font-bold text-2xl text-main-300'>
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
                    </View>
                    <View className={`flex-col rounded-md bg-white items-center border border-custom-border-2 px-4 w-full `} >
                        {profileFunctions.map((item, index) => {
                            return (
                                renderProfileFunc(item.title, item.imgUrl)
                            )
                        })}

                    </View>
                </View>
            </ScrollView>



        </LinearGradient>
    )
}