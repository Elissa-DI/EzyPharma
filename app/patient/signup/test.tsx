// // import { useState } from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons
// // import { router } from 'expo-router';
// // import { patient } from '@/constants/styles/patient';
// // import React from 'react';

// // const PatientOnboard = () => {
// //     const [selectedButton, setSelectedButton] = useState('');
// //     const handleBack = () => {
// //         router.canGoBack();
// //     };

// //     const handleSignup = () => {
// //         router.push('/signup');
// //         console.log("Signup clicked!");

// //     }

// //     return (
// //         <View style={patient.container}>
// //             <View style={patient.header}>
// //                 <TouchableOpacity onPress={handleBack} style={patient.backButton}>
// //                     <Ionicons name="arrow-back" size={24} color="black" />
// //                 </TouchableOpacity>
// //             </View>
// //             <View>
// //                 <Image
// //                     source={require('@/assets/icons/ezy.svg')}
// //                     style={patient.logoImg}
// //                 />
// //                 <Text>EzyPharma</Text>
// //             </View>
// //             <View>
// //                 <Text>Let's get started</Text>
// //                 <Text>Login to stay healthy and fit</Text>
// //                 <View>
// //                     <TouchableOpacity
// //                         style={[patient.onBoardButton, selectedButton === 'login' && { backgroundColor: 'blue' }]}
// //                         onPress={() => setSelectedButton('login')}
// //                     >
// //                         <Text style={patient.buttonText}>Login</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity
// //                         style={[patient.onBoardButton, selectedButton === 'signup' && { backgroundColor: 'blue' }]}
// //                         onPress={handleSignup}

// //                     >
// //                         <Text style={patient.buttonText}>Sign Up</Text>
// //                     </TouchableOpacity>
// //                 </View>
// //             </View>
// //         </View>
// //     );
// // };
// // export default PatientOnboard;
// import { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons
// import { patient } from '@/constants/styles/patient';
// import { router } from 'expo-router';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import React from 'react';
// import PatientSignup from './signup/_layout';

// const PatientOnboard = () => {
//     const [selectedButton, setSelectedButton] = useState('');
//     const navigation = useNavigation<NativeStackNavigationProp<any>>();
//     const handleBack = () => {
//         router.canGoBack();
//     };

//     const handleSignup = () => {
//         // navigation.navigate(PatientSignup);
//         navigation.push('/signup')
//         console.log("Signup is clicked!");
//     }

//     return (
//         <View style={patient.container}>
//             <View style={patient.header}>
//                 <TouchableOpacity onPress={handleBack} style={patient.backButton}>
//                     <Ionicons name="arrow-back" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <Image
//                     source={require('@/assets/icons/ezy.svg')}
//                     style={patient.logoImg}
//                 />
//                 <Text>EzyPharma</Text>
//             </View>
//             <View>
//                 <Text>Let's get started</Text>
//                 <Text>Login to stay healthy and fit</Text>
//                 <View>
//                     <TouchableOpacity
//                         style={[patient.onBoardButton, selectedButton === 'login' && { backgroundColor: 'blue' }]}
//                         onPress={() => setSelectedButton('login')}
//                     >
//                         <Text style={patient.buttonText}>Login</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[patient.onBoardButton, selectedButton === 'signup' && { backgroundColor: 'blue' }]}
//                         onPress={handleSignup}
//                     >
//                         <Text style={patient.buttonText}>Sign Up</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default PatientOnboard;

import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const SignUp = () => {
  const nav = useNavigation();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [phoneOrEmail, setPhoneOrEmail] = useState("email");
  const [isShowm, setIsShowm] = useState(false);
  const [terms, setTerms] = useState(false);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.title}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Sign Up</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.input}>
          <Ionicons name="person-outline" size={24} color={"gray"}></Ionicons>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChange={setName}
          />
        </View>
        <View style={styles.inputCheckbox}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              phoneOrEmail == "email" ? styles.checked1 : null,
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
              styles.checkbox,
              phoneOrEmail == "phone" ? styles.checked2 : null,
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
          <View style={styles.input}>
            <Ionicons name="mail-outline" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your email"
              onChange={email}
              value={setEmail}
            />
          </View>
        ) : (
          <View style={styles.input}>
            <Ionicons name="call" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your phone"
              value={phone}
              onChange={setPhone}
            />
          </View>
        )}
        <View style={styles.input}>
          <Feather name="lock" size={24} color={"gray"} />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
            secureTextEntry={isShowm ? false : true}
          />
          <TouchableOpacity
            style={styles.showPass}
            onPress={() => {
              setIsShowm((prev) => !prev);
            }}
          >
            <Ionicons
              name={isShowm ? "eye-outline" : "eye-off-outline"}
              size={24}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.terms}>
        <Checkbox
          value={terms}
          onValueChange={setTerms}
          color={terms ? "blue" : "gray"}
          style={{ width: 25, height: 25, borderRadius: 6 }}
        />
        <Text style={{ fontSize: 15 }}>
          I agree to the healthcare{" "}
          <Text style={styles.link}>Terms of services</Text> and{" "}
          <Text style={styles.link}>Privacy policy</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.sign}>
        <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.already}>
        <Text style={{ fontSize: 17}}>
          Already have an account?{" "}
          <Text style={{ color: "blue" }}>Sign in</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    paddingLeft: 10,
    gap: 100,
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "900",
    fontSize: 20,
  },
  formContainer: {
    marginTop: 40,
    marginBottom: 60,
    alignItems: "center",
  },
  input: {
    height: 60,
    backgroundColor: "rgba(222, 222, 222,0.5)",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderRadius: 6,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  inputCheckbox: {
    height: 60,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    marginBottom: 25,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  checkbox: {
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    color: "gray",
    padding: 10,
  },
  checked1: {
    backgroundColor: "white",
    borderRightWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 6,
  },
  checked2: {
    backgroundColor: "white",
    borderLeftWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 6,
  },
  showPass: {
    position: "absolute",
    right: 10,
  },
  terms: {
    width: "80%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    gap: 14,
  },
  link: {
    color: "blue",
  },
  sign: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#0c97fa",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 50,
  },
  already: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
});
export default SignUp;
