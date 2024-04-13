import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'


const NotificationPage = () => {
  return (
    <View style={tw`px-4`}>
      <View style={tw`flex-row items-center gap-28 mt-10 py-4`}>
        <Link href="../">
          <FontAwesome name='arrow-left' size={20} />
        </Link>
        <Text style={tw`font-bold text-xl`}>Notification</Text>
      </View>
      <View style={tw`w-full`}>
        <Image
          source={require('@/assets/images/blob.svg')}
          style={tw`w-full h-20`}
        />
      </View>
    </View>
  )
}

export default NotificationPage