import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { router } from 'expo-router'
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons'

const ProfilePage = () => {
    const handleForgot = () => {
        router.navigate('/patient/forgot')
    }

    const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    const handleLogout = () => {
        // Add your logout logic here
        // For demonstration purposes, let's just close the modal
        setLogoutModalVisible(false);
    };

    const links = [
        {
            icon: 'user',
            name: 'Edit profile',
            redirect: '/patient/home/profile/editProfile'
        },
        {
            icon: 'heart',
            name: 'My saved',
            redirect: '/patient/home/profile/mySaved'
        },
        {
            icon: 'credit-card',
            name: 'Payment method',
            redirect: '/patient/home/profile/paymentMethod'
        },
        {
            icon: 'help-circle',
            name: 'FAQs',
            redirect: '/patient/home/profile/faqs'
        },
        {
            icon: 'log-out',
            name: 'Logout',
        },
    ]
    return (
        <View>
            <View style={tw`w-full items-center pt-14`}>
                <Image source={require('@/assets/images/profile.png')} />
                <Text style={tw`font-bold my-3`}>Ruchita Harris</Text>
                <Text style={tw`font-bold text-gray-500`}>ruchitaharris@gmail.com</Text>
                <Text style={tw`font-bold text-gray-500`}>Registered Since 2023</Text>
            </View>
            <View style={tw`w-full items-center pl-2 pr-6 mt-14`}>
                {links.map((link, index) => (
                    <TouchableOpacity key={index} style={tw`w-full p-4`} onPress={() => {
                        if (link.redirect) {
                            router.navigate(link.redirect);
                        } else {
                            setLogoutModalVisible(true);
                        }
                    }}>
                        <View style={tw`flex-row gap-4 w-full`}>
                            <View style={tw`bg-blue-100 p-1 rounded-full`}>
                                <Feather name='user' size={20} color='blue' />
                            </View>
                            <View style={tw`flex-row items-center justify-between w-[90%]`}>
                                <View>
                                    <Text style={tw`font-bold text-[16px]`}>{link.name}</Text>
                                </View>
                                <View>
                                    <FontAwesome name='chevron-right' size={16} style={tw`text-gray-500`} />
                                </View>
                            </View>
                        </View>
                        <View style={tw`w-[105%] border-t border-gray-400 my-2`} />
                    </TouchableOpacity>
                ))}
            </View>

            <Modal visible={logoutModalVisible} transparent animationType="fade">
                <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black`}>
                    <View style={tw`w-4/5 bg-white p-4 rounded-lg items-center`}>
                        <View style={tw`bg-blue-100 p-6 rounded-full my-3`}>
                            <FontAwesome name='sign-out' color='blue' size={30} />
                        </View>
                        <View style={tw`items-center w-full`}>
                            <Text style={tw`font-bold text-xl mb-3 text-center`}>Are you sure to log out of your account?</Text>
                            <TouchableOpacity
                                style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 px-5 rounded-full`}
                                onPress={() => {
                                    router.navigate('/patient/login')
                                    console.log("Logged out successflly");
                                }}
                            >
                                <Text style={tw`text-white font-semibold`}>Logout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
                                <Text style={tw`text-red-500 font-bold my-3`}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default ProfilePage