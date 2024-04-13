import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'

import iconImage from '@/assets/images/icon.png';
import GetLocation from '@/components/getLocation'

const NotificationPage = () => {
  const notifications = [
    {
      image: iconImage,
      name: 'EzyPharma',
      content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
      minutesAgo: 1,
      read: false,
    },
    {
      image: iconImage,
      name: 'EzyPharma',
      content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
      minutesAgo: 1,
      read: false,
    },
    {
      image: iconImage,
      name: 'EzyPharma',
      content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
      minutesAgo: 1,
      read: true,
    },
    {
      image: iconImage,
      name: 'EzyPharma',
      content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
      minutesAgo: 1,
      read: true,
    },
    // {
    //   image: iconImage,
    //   name: 'EzyPharma',
    //   content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
    //   minutesAgo: 1,
    //   read: false,
    // },
    // {
    //   image: iconImage,
    //   name: 'EzyPharma',
    //   content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
    //   minutesAgo: 1,
    //   read: false,
    // },
    // {
    //   image: iconImage,
    //   name: 'EzyPharma',
    //   content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
    //   minutesAgo: 1,
    //   read: false,
    // },
    // {
    //   image: iconImage,
    //   name: 'EzyPharma',
    //   content: 'Lorem ipsum  dolor sit amet,consectetur adipiscing',
    //   minutesAgo: 1,
    //   read: false,
    // },
  ]
  return (
    <View>
      <Image
        source={require('@/assets/images/blob.png')}
        style={tw`w-full absolute h-[400px]`}
      />
      <View style={tw`px-4`}>
        <View style={tw`flex-row items-center gap-28 mt-10 py-4`}>
          <Link href="../">
            <FontAwesome name='arrow-left' size={20} />
          </Link>
          <Text style={tw`font-bold text-xl`}>Notification</Text>
        </View>
        <ScrollView>
          <View style={tw`mt-10 gap-7`}>
            {notifications.map((notification, index) => (
              <View key={index} style={tw`flex-row gap-3`}>
                <View style={tw`w-18 h-18 justify-center rounded-full overflow-hidden border-2 border-blue-800`}>
                  <Image
                    source={notification.image}
                    style={tw`w-full h-full`}
                    resizeMode='contain'
                  />
                </View>
                <View style={tw`flex-row gap-8 items-center`}>
                  <View>
                    <Text style={tw`font-bold`}>{notification.name}</Text>
                    <Text style={tw`w-44`}>{notification.content}</Text>
                    <Text style={tw`text-gray-500 font-bold`}>{notification.minutesAgo}m ago.</Text>
                  </View>
                  {!notification.read && (
                    <View style={tw`w-6 h-6 justify-center items-center bg-blue-600 rounded-full`}>
                      <Text style={tw`text-white font-bold`}>1</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default NotificationPage;
