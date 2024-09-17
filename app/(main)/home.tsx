import { View, Text, ImageBackground, ScrollView, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GRADIENT_VERTICAL_BG } from '@/constants/Background'
import ImageTab from '@/components/ImageTab'
import { articleSaleImages, IMAGE_AVT } from '@/constants/Image'
import Sticker_func from '@/components/sticker_func'
import { list_funcs1, list_funcs2 } from '@/constants/HomeArray'
import BoxImage from '@/components/BoxImage'
import { navigateTo } from '@/utils/navigation'


const Home = () => {
  return (
    <ImageBackground
      source={GRADIENT_VERTICAL_BG}
      resizeMode="cover"
      style={{
        height: '100%',

      }}

    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 110,
          paddingBottom: 0,
          flex: 1
        }}

      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          className=' flex px-6 h-52 flex-1'
          horizontal
          showsHorizontalScrollIndicator={false}

        >
          <View
            className='flex-row h-full items-center w-full gap-5 pr-12'
          >
            <View className='h-2/3 w-24 flex-col items-center justify-between mr-3'>
              <Pressable
                onPress={() => navigateTo.profile()}
                className='bg-main-3 rounded-full'
                style={{
                  width: 66,
                  height: 66
                }}
              >
                <Image
                  source={IMAGE_AVT}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 50
                  }}
                />
              </Pressable>
              <View className='bg-slate-200 w-full h-8 rounded-full justify-center items-center'>
                <Text className=' font-medium'>Basic</Text>
              </View>
            </View>
            <ImageTab custom='w-72 h-2/3 p-5' >
              <Text className='text-white'>Total blance VND </Text>
              <Text className='text-white'>200.000 VND </Text>
            </ImageTab>
            <ImageTab custom='w-80 h-2/3 p-7' >
              <Text className='text-white'>Cash Flow Management </Text>
              <Text className='text-main-100 text-[12px]'>Transaction management platform</Text>
            </ImageTab>
          </View>
        </ScrollView>
        <View className='bg-gray-100 w-full rounded-t-2xl pb-52 '>
          {/* List function */}
          <View>
            <View className='flex-row flex-wrap py-5 px-8 justify-between ' >
              {list_funcs1.map((item) => {
                return (
                  <Sticker_func key={item.id} title={item.title} imgUrl={item.img_url} custom='w-1/2 h-1/2' />
                )
              })}
            </View>
          </View>

          {/* List picture */}
          <View className=' items-center pb-6'>
            <FlatList
              className='pl-6 w-full'
              horizontal
              data={articleSaleImages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <BoxImage imgUrl={item.imgUrl} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            />
          </View>
          {/* List function 2 */}
          <View>
            <Text className='px-6 font-bold' > Shopping-Entertaiment-Investment</Text>
            <View className='flex-row flex-wrap py-5 px-8 justify-between ' >
              {list_funcs2.map((item) => {
                return (
                  <Sticker_func key={item.id} title={item.title} imgUrl={item.img_url} custom='w-1/2 h-1/2' />
                )
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground >



  )
}

export default Home