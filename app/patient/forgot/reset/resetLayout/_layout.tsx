// import React, { useRef, useState } from 'react'
// import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import { Link, router } from 'expo-router'
// import { FontAwesome } from "@expo/vector-icons";
// import { useToast } from "react-native-toast-notifications";
// import axios from 'axios';
// import tw from 'twrnc';

// const CodeVerificationLayout = () => {
//   const [verificationMethod, setVerificationMethod] = useState<string>('email');
//   const [code, setCode] = useState<any>(Array(6).fill(''));
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const toast = useToast();

//   const inputRefs = useRef<TextInput[]>([]);

//   const handleVerify = async () => {
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post('https://ezypharma-backend.onrender.com/auth/verify-account', {
//         email: 'user@example.com', // Replace with user's email or phone number
//         code: code // Send the entered verification code
//       });
//       if (response.status === 200) {
//         router.navigate('/patient/forgot/reset/resetPassword');
//       }
//     } catch (error: any) {
//       if (error.response) {
//         if (error.response.status === 401) {
//           console.log('Invalid verification code');
//         } else if (error.response.status === 404) {
//           console.log('User not found');
//         } else if (error.response.status === 422) {
//           console.log('Validation Error:', error.response.data.detail);
//         } else {
//           console.log('Internal server error');
//         }
//       } else {
//         console.log('An error occurred. Please try again later.');
//       }
//     }
//     setIsSubmitting(false);
//   }
//   const handleResend = () => {
//     console.log("Resent the code please!")
//   }

//   const handleKeyPress = (index: number, e: React.KeyboardEvent<TextInput>) => {
//     if (e.nativeEvent.key === 'Backspace') {
//       if (index > 0) {
//         const newCode = [...code];
//         newCode[index - 1] = '';
//         setCode(newCode);
//         inputRefs.current[index - 1].focus();
//       }
//     } else if (e.nativeEvent.key >= '0' && e.nativeEvent.key <= '9') {
//       if (index < 6) {
//         const newCode = [...code];
//         newCode[index] = e.nativeEvent.key;
//         setCode(newCode);
//         if (index < 5) {
//           inputRefs.current[index + 1].focus();
//         }
//       }
//     }
//   }
//   return (
//     <View style={tw`px-7`}>
//       <View style={tw`mt-14 mb-5 px-1`}>
//         <Link href='../'>
//           <FontAwesome name="chevron-left" size={18} />
//         </Link>
//       </View>
//       <View style={tw``}>
//         <Text style={tw`font-bold text-2xl mb-3`}>Enter Verification Code</Text>
//         {verificationMethod === 'phone' ?
//           (
//             <Text style={tw`text-gray-400`}>Enter code that we have sent to your number 08528188*** </Text>
//           ) :
//           (
//             <Text style={tw`text-gray-400`}>Enter code that we have sent to your email davinecyuzu***</Text>
//           )
//         }
//       </View>
//       <View style={tw`my-14 flex flex-row gap-3`}>
//         {/* <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         />
//         <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         />
//         <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         />
//         <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         />
//         <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         />
//         <TextInput
//           style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//           maxLength={1}
//         /> */}
//         {code.map((_ : any, i : any) => (
//           <TextInput
//             key={i}
//             ref={ref => inputRefs.current[i] = ref as TextInput}
//             style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
//             maxLength={1}
//             value={code[i]}
//             onChangeText={text => {
//               const newCode = [...code];
//               newCode[i] = text;
//               setCode(newCode);
//             }}
//             onKeyPress={e => handleKeyPress(e, i)}
//           />
//         ))}
//       </View>
//       <View style={tw`items-center`}>
//         <TouchableOpacity style={tw`w-full items-center bg-blue-600 py-5 rounded-full`} onPress={handleVerify}>
//           <Text style={tw`text-white font-semibold`}>
//             {isSubmitting ? 'Verifying...' : 'Verify'}
//           </Text>
//         </TouchableOpacity>
//         <View style={tw`flex-row my-5`}>
//           <Text style={tw`text-gray-500`}>Didn't receive the code?</Text>
//           <Text
//             onPress={handleResend}
//             style={tw`text-blue-600 font-semibold`}
//           > Resend</Text>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default CodeVerificationLayout
import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { FontAwesome } from "@expo/vector-icons";
import { useToast } from 'react-native-toast-notifications';
import axios from 'axios';
import tw from 'twrnc';

const CodeVerificationLayout = () => {
  const [verificationMethod, setVerificationMethod] = useState<string>('email');
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const toast = useToast();
  const inputRefs = useRef<TextInput[]>([]);
  const router = useRouter();

  const handleVerify = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://ezypharma-backend.onrender.com/auth/verify-account', {
        email: 'user@example.com', // Replace with user's email or phone number
        code: code.join(''), // Send the entered verification code as a string
      });
      if (response.status === 200) {
        router.push('/patient/forgot/reset/resetPassword');
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
  };

  const handleResend = () => {
    console.log('Resent the code please!');
  };

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move focus to the next input if a character is entered
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={tw`px-7`}>
      <View style={tw`mt-14 mb-5 px-1`}>
        <Link href='../'>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
      </View>
      <View>
        <Text style={tw`font-bold text-2xl mb-3`}>Enter Verification Code</Text>
        {verificationMethod === 'phone' ? (
          <Text style={tw`text-gray-400`}>Enter code that we have sent to your number 08528188***</Text>
        ) : (
          <Text style={tw`text-gray-400`}>Enter code that we have sent to your email davinecyuzu***</Text>
        )}
      </View>
      <View style={tw`my-14 flex flex-row gap-3`}>
        {code.map((_, i) => (
          <TextInput
            key={i}
            ref={ref => (inputRefs.current[i] = ref as TextInput)}
            style={tw`border border-blue-600 rounded-xl w-10 h-10 px-2 py-2 mb-2 text-center`}
            maxLength={1}
            keyboardType="numeric"
            value={code[i]}
            onChangeText={text => handleChangeText(text, i)}
            onKeyPress={e => handleKeyPress(e, i)}
          />
        ))}
      </View>
      <View style={tw`items-center`}>
        <TouchableOpacity style={tw`w-full items-center bg-blue-600 py-5 rounded-full`} onPress={handleVerify}>
          <Text style={tw`text-white font-semibold`}>
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </Text>
        </TouchableOpacity>
        <View style={tw`flex-row my-5`}>
          <Text style={tw`text-gray-500`}>Didn't receive the code?</Text>
          <Text onPress={handleResend} style={tw`text-blue-600 font-semibold`}>Resend</Text>
        </View>
      </View>
    </View>
  );
};

export default CodeVerificationLayout;
