import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

const PaymentMethod = () => {
  return (
    <View style={tw`mt-10`}>
      <View style={tw`flex-row items-center gap-20 mt-5 px-4`}>
        <Link href="../">
          <FontAwesome name="chevron-left" size={18} />
        </Link>
        <Text style={tw`font-bold text-xl`}>Payment  Method</Text>
      </View>
      <View style={tw`w-full items-center mt-[140%]`}>
        <TouchableOpacity
          style={tw`w-4/5 bg-blue-500 p-3 items-center rounded-xl`}
        >
          <Text style={tw`text-white font-bold`}>Add new</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PaymentMethod