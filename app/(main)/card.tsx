import { View, Text, ImageBackground, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CardHorizon from '@/components/CardHorizon';
import { card_Horizons, card_Squares_1, card_Vertical_1, linkCards, vouchers } from '@/constants/CardArrays';
import CardSquare from '@/components/CardSquare';
import { SIGNIN_BACKGROUND } from '@/constants/Background';
import BoxImage from '@/components/BoxImage';
import Article from '@/components/Article';

const Card = () => {
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
          paddingBottom: 90
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
        >
          <View className='h-20 flex-row justify-between items-center px-6 mt-6'>
            <Text className='text-black text-2xl font-medium'>Card (2)</Text>
            <View className='px-3 py-2 border border-custom-color rounded-3xl'>
              <Text className='text-custom-color'>All cards</Text>
            </View>
          </View>
          {/* Card horizon */}
          <View className='pl-6 py-3'>
            <FlatList
              className='gap-3'
              contentContainerStyle={{
                paddingRight: 3
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={card_Horizons}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <CardHorizon imgUrl={item.imgUrl} content={{ title1: item.title1, title2: item.title2 }} />}
            />

          </View>
          <View className='pl-6 py-6'>
            <FlatList
              className='py-4'
              horizontal
              showsHorizontalScrollIndicator={false}
              data={card_Squares_1}
              renderItem={({ item }) => <CardSquare imgUrl={item.imgUrl} title={item.title} />}
              keyExtractor={(item, index) => index.toString()}
            />

          </View>
        </LinearGradient>
        {/* imge shopping mall */}
        <LinearGradient
          // Background Linear Gradient
          colors={['#F9F1FD', '#F6EAFC', '#EFDBF9', '#EDD9F8', '#EBD3F8']}
        >
          {/* Title */}
          <View className='flex-row px-6 items-center justify-between'>
            <View className='flex-row gap-3 py-8 items-center'>
              <Text className='font-medium text-xl'>Shopping mall</Text>
              <MaterialIcons name="shopping-cart-checkout" size={24} color="black" />
            </View>
            <View className='border-2 border-custom-color py-2 px-4 rounded-full '>
              <Text className='text-custom-color font-medium'>Discover</Text>
            </View>
          </View>
          <View className='pl-6 pb-8'>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={card_Vertical_1}
              renderItem={({ item }) => <BoxImage imgUrl={item} custom='w-40 h-72 mr-6' />}
            />
          </View>
          {/* Voucher list */}
          <View
          >
            {/* Title */}
            <View className='flex-row px-6 items-center justify-between'>
              <View className='flex-row gap-3 py-8 items-center'>
                <Text className='font-medium text-xl'>Voucher</Text>
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
          {/* Link card list */}
          <View
            className='pb-40'
          >
            {/* Title */}
            <View className='flex-row px-6 items-center justify-between'>
              <View className='flex-row gap-3 py-8 items-center'>
                <Text className='font-medium text-xl'>Link card</Text>
              </View>
              <View className='border-2 border-custom-color py-2 px-4 rounded-full  '>
                <Text className='text-custom-color font-medium'>All</Text>
              </View>
            </View>
            <View className='pl-6 pb-32f'>
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
        </LinearGradient>
      </ScrollView>
    </ View>
  )
}

export default Card