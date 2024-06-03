import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { router, Link } from 'expo-router';
import { useToast } from "react-native-toast-notifications";
import axios from 'axios';
import tw from 'twrnc';

const ForgotPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneOrEmail, setPhoneOrEmail] = useState("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleForgotSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://ezypharma-backend.onrender.com/auth/forgot-password', {
        email,
      });
      if (response.status === 200) {
        console.log(response.data.message);
        toast.show('Code successfully sent!');
        router.navigate("/patient/forgot/reset");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        toast.show('Validation error')
      } else {
        toast.show('An error occurred. Please try again later.');
      }
    }
    setIsSubmitting(false);
  };
  return (
    <ScrollView>
      <View style={tw`mt-12 py-1 px-8`}>
        <Link href='../'>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
      </View>
      <View style={tw`flex items-center mt-5`}>
        <Image
          source={require('@/assets/images/forgot.png')}
        />
      </View>
      <View style={tw`flex items-center mt-10 px-10`}>
        <View style={tw``}>
          <Text style={tw`font-bold text-xl`}>Forgot Your password?</Text>
          <Text>
            Enter your email or your phone number,
            we will send you confirmation code
          </Text>
        </View>
      </View>
      <View style={tw`mt-5 mb-5 items-center`}>
        <View style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-25 mb-6 w-4/5 flex flex-row items-center rounded-xl"`}>
          <TouchableOpacity
            style={[
              tw`h-full w-1/2 flex flex-row justify-center items-center gap-4 text-gray-500 p-4`,
              phoneOrEmail == "email" ? tw`bg-white border-r-2 border-gray-500 border-opacity-25 rounded-r-md` : null
            ]}
            onPress={() => {
              setPhoneOrEmail("email");
            }}
          >
            <Ionicons
              name="mail-outline"
              size={24}
              color={phoneOrEmail == "email" ? "blue" : "gray"}
            />
            <Text
              style={
                phoneOrEmail == "email" ? { color: "blue" } : { color: "gray" }
              }
            >
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw`h-full w-1/2 flex flex-row justify-center items-center gap-4 text-gray-500 p-4`,
              phoneOrEmail == "phone" ? tw`bg-white border-l-2 border-gray-800 border-opacity-25 rounded-l-md` : null
            ]}
            onPress={() => {
              setPhoneOrEmail("phone");
            }}
          >
            <Ionicons
              name="call"
              size={24}
              color={phoneOrEmail == "phone" ? "blue" : "gray"}
            />
            <Text
              style={
                phoneOrEmail == "phone" ? { color: "blue" } : { color: "gray" }
              }
            >
              Phone
            </Text>
          </TouchableOpacity>
        </View>
        {phoneOrEmail == "email" ? (
          <View
            style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-5/6 flex flex-row items-center gap-4 rounded-lg`}
          >
            <Ionicons name="mail-outline" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={tw`w-5/6 h-10 border-transparent focus:border-transparent px-4`}
            />
          </View>
        ) : (
          <View
            style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-5/6 flex flex-row items-center gap-4 rounded-lg`}
          >
            <Ionicons name="call" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your phone"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              style={tw`w-5/6 h-10 border-transparent focus:border-transparent px-4`}
            />
          </View>
        )}
      </View>
      <View style={tw`w-full flex items-center mt-10`}>
        <TouchableOpacity
          style={[tw`h-14 w-4/5 flex items-center justify-center bg-blue-600 rounded-full`, isSubmitting && tw`bg-gray-400`]}
          // onPress={handleForgotSubmit}
          onPress={() => {
            router.navigate("/patient/forgot/reset");
          }}
          disabled={isSubmitting}
        >
          <Text style={tw`font-bold text-white`}>
            {
              isSubmitting ? 'Submitting...' : 'Submit'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ForgotPassword

