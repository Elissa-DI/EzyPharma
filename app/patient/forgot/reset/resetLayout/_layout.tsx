import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import axios from 'axios';
import tw from 'twrnc';

const CodeVerificationLayout = () => {
  const [verificationMethod, setVerificationMethod] = useState<string>('email');
  const [code, setCode] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toast = useToast();

  const handleVerify = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://ezypharma-backend.onrender.com/auth/verify-account', {
        email: 'user@example.com', // Replace with user's email or phone number
        code: code // Send the entered verification code
      });
      if (response.status === 200) {
        router.navigate('/patient/forgot/reset/resetPassword');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log('Invalid verification code');
        } else if (error.response.status === 404) {
          console.log('User not found');
        } else if (error.response.status === 422) {
          console.log('Validation Error:', error.response.data.detail);
        } else {
          console.log('Internal server error');
        }
      } else {
        console.log('An error occurred. Please try again later.');
      }
    }
    setIsSubmitting(false);
  }
  const handleResend = () => {
    console.log("Resent the code please!")
  }

  return (
    <View style={tw`px-7`}>
      <View style={tw`mt-14 mb-5 px-1`}>
        <Link href='../'>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
      </View>
      <View style={tw``}>
        <Text style={tw`font-bold text-2xl mb-3`}>Enter Verification Code</Text>
        {verificationMethod === 'phone' ?
          (
            <Text style={tw`text-gray-400`}>Enter code that we have sent to your number 08528188*** </Text>
          ) :
          (
            <Text style={tw`text-gray-400`}>Enter code that we have sent to your email davinecyuzu***</Text>
          )
        }
      </View>
      <View style={tw`my-14 px-2 flex flex-row gap-5`}>
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
        <TouchableOpacity style={tw`w-full items-center bg-blue-600 py-5 rounded-full`} onPress={handleVerify}>
          <Text style={tw`text-white font-semibold`}>
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Text>
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