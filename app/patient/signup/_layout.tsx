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
import { Link, router } from "expo-router";
import tw from "twrnc";
import Modal from "react-native-modal";


const PatientSignup = () => {
    const nav = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [phoneOrEmail, setPhoneOrEmail] = useState("email");
    const [isShowm, setIsShowm] = useState(false);
    const [terms, setTerms] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSignup = () => {
        setIsModalVisible(true)
    }

    const LocationModal = () => (
        <View style={tw`items-center bg-white p-5 rounded-lg`}>
            <View style={tw`w-full items-end`}>
                <TouchableOpacity
                    onPress={() => {setIsModalVisible(false)}}
                >
                    <FontAwesome name="times-circle-o" size={20} color='gray' />
                </TouchableOpacity>
            </View>
            <View style={tw`bg-blue-100 p-6 rounded-full my-3`}>
                <Ionicons name="locate" color='blue' size={25} />
            </View>
            <View style={tw`items-center`}>
                <Text style={tw`font-bold text-xl mb-3`}>Allow location</Text>
                <Text>Grant location access for enhanced features.</Text>
                <TouchableOpacity
                    style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 rounded-full`}
                    onPress={() => {
                        console.log("Location enabled");

                    }}
                >
                    <Text style={tw`text-white font-semibold`}>Allow location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
                        onChangeText={(text) => setName(text)}
                        style={styles.textInput}
                    // onChange={setName}
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
            <View style={styles.terms}>
                <Checkbox
                    value={terms}
                    onValueChange={setTerms}
                    color={terms ? "blue" : "gray"}
                    style={{ width: 25, height: 25, borderRadius: 20 }}
                />
                <Text style={{ fontSize: 15 }}>
                    I agree to the healthcare{" "}
                    <Text style={styles.link}>Terms of services</Text> and{" "}
                    <Text style={styles.link}>Privacy policy</Text>
                </Text>
            </View>
            <TouchableOpacity
                style={styles.sign}
                onPress={handleSignup}
            >
                <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.already}>
                <Text style={{ fontSize: 17 }}>
                    Already have an account?{" "}
                    <Text style={{ color: "blue" }}>Sign in</Text>
                </Text>
            </View>
            <Modal isVisible={isModalVisible}>
                {LocationModal()}
            </Modal>
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

export default PatientSignup