import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";
import tw from 'twrnc'

const PatientLogin = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneOrEmail, setPhoneOrEmail] = useState("email");
  const [isShowm, setIsShowm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handlePatientLogin = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://ezypharma-backend.onrender.com/auth/login', {
        email,
        password
      });
      if (response.status === 200) {
        const { access_token } = response.data;
        await AsyncStorage.setItem('access_token', access_token);
        router.navigate('/patient/home');
        toast.show('Successfully logged in!');
      }
    } catch (error) {
      toast.show('Incorrect email or password');
    } finally {
      setIsSubmitting(false);
    }
    // router.navigate('/patient/home');
  };

  const handleForgot = () => {
    router.navigate('/patient/forgot')
  }
  const redirectSignUp = () => {
    router.navigate('/patient/signup')
  }
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.title}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Login</Text>
      </View>
      <View style={styles.formContainer}>
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
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles.textInput}
            />
          </View>
        ) : (
          <View style={styles.input}>
            <Ionicons name="call" size={24} color={"gray"} />
            <TextInput
              placeholder="Enter your phone"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              style={styles.textInput}
            />
          </View>
        )}
        <View style={styles.input}>
          <Feather name="lock" size={24} color={"gray"} />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={isShowm ? false : true}
            style={styles.passInput}
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
      <View style={styles.forgot}>
        <TouchableOpacity
          onPress={handleForgot}
        >
          <Text style={{ color: "blue" }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.sign, isSubmitting && styles.disabled]}
        onPress={handlePatientLogin}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.already}>
        <Text style={{ fontSize: 16 }}>
          Don't have an account?{" "}
          <TouchableOpacity
            onPress={redirectSignUp}
          >
            <Text style={[{ color: "blue" }, tw`mt-3 text-center`]} >Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.orContainer}>
        <View style={tw`my-10`}>
          <Text className=" font-extrabold">OR</Text>
        </View>
        <TouchableOpacity style={styles.orBtn}>
          <Ionicons name="logo-google" size={24} color={"gray"} />
          <View>
            <Text style={styles.orText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    paddingLeft: 10,
    gap: 110,
    alignItems: "center",
    marginTop: 10
  },
  pageTitle: {
    fontWeight: "900",
    fontSize: 20,
  },
  formContainer: {
    marginTop: 25,
    marginBottom: 5,
    alignItems: "center",
  },
  input: {
    height: 60,
    backgroundColor: "rgba(222, 222, 222,0.5)",
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 10,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderRadius: 6,
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 10,
  },
  passInput: {
    width: '70%',
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 10,
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
  forgot: {
    alignSelf: "flex-end",
    right: 35,
    color: 'blue'
  },
  sign: {
    marginTop: 25,
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#0c97fa",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 50,
  },
  already: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10
  },
  orContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  orBtn: {
    height: 45,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 10,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    borderRadius: 6,
  },
  orText: {
    fontWeight: 'bold'
  },
  disabled: {
    opacity: 0.5,
  },
});

export default PatientLogin