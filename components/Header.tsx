import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Header = () => {
    return (
        <View className='flex-row  w-full justify-between items-center px-6 pt-14'>
            <View className='flex-row items-center'>
                <Image
                    source={require('../assets/images/favicon.png')}
                />
                <Text className='pl-2 text-4xl text-white'>SB</Text>
            </View>
            <View className=' flex-row rounded-full justify-center items-center gap-6'
            >
                <Image
                    source={require('../assets/images/goat.png')}
                    style={{
                        width: 24,
                        height: 34,
                        paddingRight: 0
                    }}
                />
                <Feather name="search" size={24} color={Colors.light.icon} />
                <Feather name="bell" size={24} color={Colors.light.icon} />
                <SimpleLineIcons name="menu" size={22} color={Colors.light.icon} />
            </View>
        </View>
    )
}

export default Header