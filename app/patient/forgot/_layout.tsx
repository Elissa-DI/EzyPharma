import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { router, Link } from 'expo-router';

const ForgotLayout = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneOrEmail, setPhoneOrEmail] = useState("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleForgotSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.navigate('/patient/forgot/reset')
    }, 3000)
  }
  return (
    <View>
      <View style={tw`py-4 px-8`}>
        <Link href='../'>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
      </View>
      <View style={tw`flex items-center mt-5`}>
        <Image
          source={require('@/assets/icons/forgot.svg')}
        />
      </View>
      <View style={tw`flex items-center mt-10 px-10`}>
        <Text style={tw`font-bold text-xl`}>Forgot Your password?</Text>
        <Text style={tw`px-10`}>
          Enter your email or your phone number,
          we will send you confirmation code
        </Text>
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
            // style={styles.input}
            style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-5/6 flex flex-row items-center gap-4 rounded-lg`}
          >
            <Ionicons name="mail-outline" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              // style={styles.textInput}
              style={tw`w-5/6 h-10 border-transparent focus:border-transparent px-4`}
            />
          </View>
        ) : (
          <View
            // style={styles.input}
            style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-5/6 flex flex-row items-center gap-4 rounded-lg`}
          >
            <Ionicons name="call" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your phone"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              // style={styles.textInput}
              style={tw`w-5/6 h-10 border-transparent focus:border-transparent px-4`}
            />
          </View>
        )}
      </View>
      <View style={tw`w-full flex items-center mt-10`}>
        <TouchableOpacity 
          style={[tw`h-14 w-4/5 flex items-center justify-center bg-blue-600 rounded-full`, isSubmitting && tw`bg-gray-400`]}
          onPress={handleForgotSubmit}
          disabled={isSubmitting}
        >
          <Text style={tw`font-bold text-white`}>
            {
              isSubmitting ? 'Submitting...' : 'Submit'
            }
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotLayout