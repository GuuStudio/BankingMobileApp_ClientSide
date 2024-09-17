import { View, Text, Image, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { DARKBLUE_OPACITY_BACKGROUND, SIGNIN_BACKGROUND } from '@/constants/Background';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';

const SignUpScreen = () => {
    return (
        <ImageBackground
            source={SIGNIN_BACKGROUND}
            resizeMode="cover"
            className=' flex-1 px-6'
        >
            <View >
                <SafeAreaView >
                    <View >
                        <View className='flex-row  pt-6  w-full justify-between items-center'>
                            <View className='flex-row items-center'>
                                <Image
                                    source={require('../../assets/images/favicon.png')}
                                />
                                <Text className='pl-2 text-4xl text-white'>SB</Text>
                            </View>
                            <View className='rounded-full justify-center items-center w-14 h-14 '
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/vietnam (1).png')}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />

                            </View>
                        </View>
                        <View className='flex-row  pt-6  w-full justify-end items-center'>
                            <View className='rounded-full justify-center items-center w-14 h-14 '
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goat.png')}
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />

                            </View>
                        </View>
                    </View>
                    <View className={` mt-8  rounded-2xl border border-main-300 justify-between`}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <View className='w-full h-[70px] rounded-t-2xl px-8 flex-row  items-center bg-main-400'

                        >
                            <View className='w-9 h-9 bg-main-100 justify-center rounded-full items-center'>
                                <Ionicons name="chevron-back" size={14} color="white" />
                            </View>
                            <View className='pl-2'>
                                <Text className=' text-white  text-md'>Back</Text>
                                <Text className='text-white '>Phuc Van Phu</Text>
                            </View>
                        </View>
                        <View className='w-full px-8' >
                            <Text className='text-white font-bold mt-6 text-lg leading-6'>Create your account</Text>
                            <View className='border-b border-b-custom-border-3 w-full h-10 mt-5' >
                                <TextInput className=' text-white opacity-55' placeholder='Username' placeholderTextColor={Colors.light.icon} />
                            </View>
                            <View className='border-b border-b-custom-border-3 w-full h-10 mt-10' >
                                <TextInput className=' text-white opacity-55' placeholder='Password' secureTextEntry={true} placeholderTextColor={Colors.light.icon} />
                            </View>
                            <View className='border-b border-b-custom-border-3 w-full h-10 mt-10' >
                                <TextInput className=' text-white opacity-55' placeholder='Confirm Password' secureTextEntry={true} placeholderTextColor={Colors.light.icon} />
                            </View>
                            <View className='flex-row gap-3 items-center mt-5'>
                                <Text className='text-white text-sm '>Already have an account?</Text>
                                <Pressable onPress={() => router.replace('/sign-in')}>
                                    <Text className='text-purple-100 font-bold text-sm '>Login</Text>
                                </Pressable>

                            </View>

                        </View>
                        <Pressable
                            className='w-full h-16 bg-main-100 rounded-b-2xl justify-center items-center mt-5'
                            onPress={() => router.push('/home')}
                        >
                            <Text className=' font-bold'>Sign Up</Text>
                        </Pressable>
                    </View>

                    <View className='flex-col pt-14 gap-8'>
                        <View className='px-8 flex-row justify-between items-center' >
                            <Text className='text-white font-bold text-xs '>Version v28.4.3 (2)</Text>
                            <Text className='text-white font-bold text-xs '>The lastest version</Text>
                        </View>
                        <View className='flex-row px-8 justify-center items-center gap-6'>
                            <View className='rounded-full justify-center items-center w-14 h-14 '
                                style={{
                                    backgroundColor: 'rgba(255, 255,255, 0.3)',
                                }}
                            >
                                <FontAwesome name="facebook-f" size={24} color={Colors.light.icon} />
                            </View>
                            <View className='rounded-full justify-center items-center w-14 h-14 '
                                style={{
                                    backgroundColor: 'rgba(255, 255,255, 0.3)',
                                }}
                            >
                                <AntDesign name="earth" size={24} color={Colors.light.icon} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>

            </View >
        </ImageBackground >



    )
}

export default SignUpScreen