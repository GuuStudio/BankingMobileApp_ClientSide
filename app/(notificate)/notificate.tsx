import NotificateBox from '@/components/NotificateBox';
import { notifications } from '@/constants/NoticateArrays';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';

type headerButton = {
    id: number,
    title: string
}

const headerButtons: headerButton[] = [
    { id: 0, title: 'My notifications' },
    { id: 1, title: 'Balance fluctuations' },
]

export default function MyPager() {
    const [currentPage, setCurrentPage] = useState(0)

    const paperRef: any = useRef(null)

    const handlePageSelected = (e: any) => {
        setCurrentPage(e.nativeEvent.position);
    };

    const goToPage = (index: number) => {
        if (paperRef.current) {
            paperRef.current.setPage(index)
        }
    }
    return (
        <View style={styles.container}>
            <View className=' flex-row bg-blue-100 h-12  px-4 justify-between'>
                {headerButtons.map((item) => {
                    return (
                        <Pressable
                            onPress={() => goToPage(item.id)}
                            className={`${item.id == currentPage && 'border-b-2 border-custom-color'} h-full items-center flex-row px-2`} key={item.id}>
                            <Text className={`${item.id == currentPage ? 'text-custom-color' : 'text-gray-500'} font-medium`}>{item.title}</Text>
                        </Pressable>
                    )
                })}
            </View>
            <PagerView style={styles.container} initialPage={0} ref={paperRef} onPageSelected={(e) => handlePageSelected(e)} >
                <View style={styles.page} key="1" className='bg-black'>
                    <LinearGradient
                        style={{
                            width: '100%'
                        }}
                        // Background Linear Gradient
                        colors={['#F5FAFD', '#F1F9FC', '#EEF7FD', '#DDF1FC', '#DDF1FC']}
                    >
                        <View className='h-full w-full p-6'>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={notifications}
                                keyExtractor={(item) => item.id + ''}
                                renderItem={({ item }) => <NotificateBox key={item.id} title={item.date}>
                                    <View className='flex-col gap-4'>
                                        <Text className='font-medium'>{item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</Text>
                                        <Text style={{
                                            textAlign: 'justify'
                                        }}>
                                            {item.description.length > 30 ? item.description.slice(0, 120) + '...' : item.description}
                                        </Text>
                                        <Text className='font-medium text-custom-color'>{item.time}</Text>
                                    </View>
                                </NotificateBox>}
                            />
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.page} key="2">
                    <LinearGradient
                        style={{
                            width: '100%'
                        }}
                        // Background Linear Gradient
                        colors={['#F5FAFD', '#F1F9FC', '#EEF7FD', '#DDF1FC', '#DDF1FC']}
                    >
                        <View className='h-full w-full p-6'>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={notifications}
                                keyExtractor={(item) => item.id + ''}
                                renderItem={({ item }) => <NotificateBox key={item.id} title={item.date}>
                                    <View className='flex-col gap-4'>
                                        <Text className='font-medium'>{item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</Text>
                                        <Text style={{
                                            textAlign: 'justify'
                                        }}>
                                            {item.description.length > 30 ? item.description.slice(0, 120) + '...' : item.description}
                                        </Text>
                                        <Text className='font-medium text-custom-color'>{item.time}</Text>
                                    </View>
                                </NotificateBox>}
                            />
                        </View>
                    </LinearGradient>
                </View>

            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
