import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarInactiveTintColor: Colors.primary,
    }}>
      <Tabs.Screen name="landingPage" options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
      }}
      />
      <Tabs.Screen name="searchPharmacy" options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
      }}
      />
      <Tabs.Screen name="notificationPage" options={{
        tabBarLabel: 'Trips',
        tabBarIcon: ({ color, size }) => <FontAwesome5 name="bell" color={color} size={size} />,
      }}
      />
      <Tabs.Screen name="profilePage" options={{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
      }}
      />
    </Tabs>
  )
}

export default TabsLayout