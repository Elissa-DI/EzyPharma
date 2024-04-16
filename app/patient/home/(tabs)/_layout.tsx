import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Image } from 'react-native';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarInactiveTintColor: Colors.grey,
    }}>
      <Tabs.Screen
        name="landingPage"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="pharmacy"
        options={{
          tabBarLabel: 'Pharmacy',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
          // tabBarIcon: () => <Image source={require('@/assets/icons/pill.svg')} width={18} height={18} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="notificationPage"
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="bell" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
          headerShown: false,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout