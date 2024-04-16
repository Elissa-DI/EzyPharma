import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'

const CustomMarker = ({ rating }) => {
  return (
    <View style={tw`w-14 h-16`}>
      <View style={tw`w-14 h-16`}>
        <View style={tw`bg-gray-400 border-4 border-white w-14 h-14 items-center rounded-xl`}></View>
        <View style={tw`bg-white absolute -bottom-0 left-3 flex-row items-center gap-1 rounded-xl px-[3px] py-[0.5px]`}>
          <FontAwesome name='star' size={10} color='orange' />
          <Text style={tw`text-[10px] font-bold`}>{rating}</Text>
        </View>
      </View>
    </View>
  )
}

export default CustomMarker