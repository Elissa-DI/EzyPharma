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

const PatientLogin = () => {
  const nav = useNavigation();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [phoneOrEmail, setPhoneOrEmail] = useState("email");
  const [isShowm, setIsShowm] = useState(false);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.title}>
        <TouchableOpacity>
          <FontAwesome name="chevron-left" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Sign In</Text>
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
              // onChange={setEmail}
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
              // onChange={setPhone}
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
            // onChange={setPassword}
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
        <Text>Forgot password?</Text>
      </View>
      <TouchableOpacity style={styles.sign}>
        <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.already}>
        <Text style={{ fontSize: 17 }}>
          Don't have an account?{" "}
          <Text style={{ color: "blue" }}>Sign up</Text>
        </Text>
      </View>
      <View style={styles.orContainer}>
        <Text>OR</Text>
        <View style={styles.orBtn}>
          <Ionicons name="logo-google" size={24} color={"gray"} />
          <View>
            <Text style={styles.orText}>Sign in with Google</Text>
          </View>
        </View>

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
    gap: 100,
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: "900",
    fontSize: 20,
  },
  formContainer: {
    marginTop: 40,
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
    position: 'absolute',
    bottom: 305,
    right: 40
  },
  sign: {
    position: "absolute",
    bottom: 200,
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
    bottom: 175,
  },
  orContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    alignItems: 'center'
  },
  orBtn: {
    height: 45,
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
  orText: {
    fontWeight: 'bold'
  }
});

export default PatientLogin