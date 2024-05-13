import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { Link, router } from "expo-router";
import { FontAwesome, Feather } from "@expo/vector-icons";
import tw from "twrnc";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [isShowm, setIsShowm] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleResetPassword = () => {
        setTimeout(() => {
            if (newPassword === confirmPassword) {
                setIsModalVisible(true);
            } else {
                Alert.alert("Error", "Passwords don't match");
            }
        }, 1500)
    };

    const renderModal = () => (
        <View style={tw`items-center bg-white p-5 rounded-lg`}>
            <View style={tw`bg-blue-100 p-6 rounded-full my-3`}>
                <FontAwesome name="check" color='blue' size={25} />
            </View>
            <View style={tw`items-center w-full`}>
                <Text style={tw`font-bold text-xl mb-3`}>Success</Text>
                <Text style={tw`text-gray-400`}>You have successfully reset your password.</Text>
                <TouchableOpacity
                    style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 rounded-full`}
                    onPress={() => {
                        router.navigate('/patient/login')
                    }}
                >
                    <Text style={tw`text-white font-semibold`}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={tw`px-8`}>
            <View style={tw`mt-10 mb-5 py-4 px-1`}>
                <Link href="../">
                    <FontAwesome name="chevron-left" size={18} />
                </Link>
            </View>
            <View style={tw`mt-2 mb-5`}>
                <Text style={tw`font-bold text-2xl mb-3`}>Reset password?</Text>
                <Text style={tw`text-gray-400`}>Create your new password to login</Text>
            </View>
            <View style={tw`w-full mb-2`}>
                <View style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-full flex flex-row items-center gap-4 rounded-lg`}>
                    <Feather name="lock" size={24} color={"gray"} />
                    <TextInput
                        placeholder="Enter new password"
                        value={newPassword}
                        onChangeText={(newPassword) => setNewPassword(newPassword)}
                        secureTextEntry={!isShowm}
                        style={tw`w-3/5 h-10 border-transparent border-0 px-4`}
                    />
                    <TouchableOpacity
                        style={tw`absolute right-5`}
                        onPress={() => {
                            setIsShowm((prev) => !prev);
                        }}
                    >
                        <FontAwesome
                            name={isShowm ? "eye" : "eye-slash"}
                            size={24}
                            color={"gray"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={tw`h-16 bg-gray-200 border border-gray-500 border-opacity-20 border-1 mb-6 pl-4 w-full flex flex-row items-center gap-4 rounded-lg`}>
                    <Feather name="lock" size={24} color={"gray"} />
                    <TextInput
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                        secureTextEntry={!isShowm}
                        style={tw`w-3/5 h-10 border-transparent border-0 px-4`}
                    />
                </View>
            </View>
            <View style={tw`items-center`}>
                <TouchableOpacity style={tw`w-full items-center bg-blue-600 py-5 rounded-full`} onPress={handleResetPassword}>
                    <Text style={tw`text-white font-semibold`}>Create Password</Text>
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                {renderModal()}
            </Modal>
        </View>
    );
};

export default ResetPassword;
