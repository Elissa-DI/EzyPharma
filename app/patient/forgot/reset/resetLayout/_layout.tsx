import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import tw from 'twrnc';
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

const CodeVerificationLayout = () => {
  const [verificationMethod, setVerificationMethod] = useState<string>('phone')

  const handleVerify = () => {
    router.navigate('/patient/forgot/reset/resetPassword')
  }
  const handleResend = () => {
    console.log("Resent the code please!")
  }
  return (
    <View style={tw`px-8`}>
      <View style={tw`my-5 py-4 px-2`}>
        <Link href='../'>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
      </View>
      <View style={tw``}>
        <Text style={tw`font-bold text-2xl mb-3`}>Enter Verification Code</Text>
        {verificationMethod === 'phone' ?
          (
            <Text>Enter code that we have sent to your number 08528188*** </Text>
          ) :
          (
            <Text>Enter code that we have sent to your email davinecyuzu***</Text>
          )
        }
      </View>
      <View style={tw`my-14 px-2 flex flex-row gap-10`}>
        <TextInput
          style={tw`border border-blue-600 rounded-xl w-14 h-14 px-2 py-2 mb-2`}
        />
        <TextInput
          style={tw`border border-blue-600 rounded-xl w-14 h-14 px-2 py-2 mb-2`}
        />
        <TextInput
          style={tw`border border-blue-600 rounded-xl w-14 h-14 px-2 py-2 mb-2`}
        />
        <TextInput
          style={tw`border border-blue-600 rounded-xl w-14 h-14 px-2 py-2 mb-2`}
        />
      </View>
      <View style={tw`items-center`}>
        <TouchableOpacity style={tw`w-4/5 items-center bg-blue-600 py-6 rounded-full`} onPress={handleVerify}>
          <Text style={tw`text-white font-semibold`}>Verify</Text>
        </TouchableOpacity>
        <View style={tw`flex-row my-5`}>
          <Text style={tw`text-gray-500`}>Didn't receive the code?</Text>
          <Text
            onPress={handleResend}
            style={tw`text-blue-600 font-semibold`}
          > Resend</Text>
        </View>
      </View>
    </View>
  )
}

export default CodeVerificationLayout