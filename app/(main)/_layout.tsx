import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBarWrapper from '@/components/tabBarWrapper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SIGNIN_BACKGROUND } from '@/constants/Background';
import Header from '@/components/Header';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,

        tabBarStyle: {
          borderTopWidth: 0,
          overflow: 'hidden',
          backgroundColor: Colors.light.background,
          height: 90,
          paddingTop: 20,
          paddingBottom: 20,
          borderTopColor: Colors.light.border,
          marginHorizontal: 10,
          borderRadius: 20,
          bottom: 15,
          position: 'absolute',
          shadowOffset: { width: 100, height: 10 }, // Đặt chiều cao bóng mờ
          shadowOpacity: 0.4, // Độ mờ của bóng mờ
          shadowRadius: 20, // Bán kính mờ của bóng mờ
          shadowColor: '#fff', // Màu của bóng mờ
        },
        header: () => <Header />,
        headerStyle: {
          borderBottomWidth: 0,
        },
        headerTransparent: true,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: 'Card',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? "credit-card-alt" : "credit-card"} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: 'Payment',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "database-arrow-right" : "database-arrow-right-outline"} size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="voucher"
        options={{
          title: 'Voucher',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "gift" : "gift-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="dots-grid" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

