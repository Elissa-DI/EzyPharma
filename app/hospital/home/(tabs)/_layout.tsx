import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarInactiveTintColor: Colors.grey,
    }}>
      <Tabs.Screen
        name="landingPage"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="refered"
        options={{
          tabBarLabel: 'Refered',
          tabBarIcon:
            ({ color, size }) =>
              <Ionicons name="clipboard-outline" color={color} size={size} />
            // <Image source={require('@/assets/icons/refered.svg')} width={18} height={18} />
          ,
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