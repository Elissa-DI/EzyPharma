import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { router } from 'expo-router'

const EditProfile = () => {
  return (
    <View>
      <View style={tw`w-full items-center pt-14`}>
        <Image source={require('@/assets/images/profile.png')} />
        <Text style={tw`font-bold my-3`}>Ruchita Harris</Text>
        <Text style={tw`font-bold text-gray-500`}>ruchitaharris@gmail.com</Text>
        <Text style={tw`font-bold text-gray-500`}>Registered Since 2023</Text>
      </View>
      <View style={tw`w-full items-start px-6 mt-14`}>
        <TextInput
          placeholder='Usename'
          style={tw`w-full border-b border-gray-400 px-1 py-2 my-2`}
        />
        <TextInput
          placeholder='Your name'
          style={tw`w-full border-b border-gray-400 px-1 py-2 my-2`}
        />
        <TextInput
          placeholder='Your phone number'
          style={tw`w-full border-b border-gray-400 px-1 py-2 my-2`}
        />
        <TextInput
          placeholder='New password'
          style={tw`w-full border-b border-gray-400 px-1 py-2 my-2`}
        />
        <View style={tw`w-full px-2 mt-8`}>
          <TouchableOpacity
            onPress={() => {
              setTimeout(() => {
                router.navigate('../');
              }, 1000)
            }}
            style={tw`w-full bg-blue-500 p-3 items-center rounded-xl`}
          >
            <Text style={tw`text-white font-bold`}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditProfile