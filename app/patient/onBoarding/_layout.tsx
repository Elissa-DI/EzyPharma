
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons
import { patient } from '@/constants/styles/patient';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import PatientSignup from './signup/_layout';

const PatientOnboard = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const handleBack = () => {
        router.canGoBack();
    };

    const handleSignup = () => {
        // navigation.navigate(PatientSignup);
        navigation.push('/signup')
        console.log("Signup is clicked!");
    }

    return (
        <View style={patient.container}>
            <View style={patient.header}>
                <TouchableOpacity onPress={handleBack} style={patient.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    source={require('@/assets/icons/ezy.svg')}
                    style={patient.logoImg}
                />
                <Text>EzyPharma</Text>
            </View>
            <View>
                <Text>Let's get started</Text>
                <Text>Login to stay healthy and fit</Text>
                <View>
                    <TouchableOpacity
                        style={[patient.onBoardButton, selectedButton === 'login' && { backgroundColor: 'blue' }]}
                        onPress={() => setSelectedButton('login')}
                    >
                        <Text style={patient.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[patient.onBoardButton, selectedButton === 'signup' && { backgroundColor: 'blue' }]}
                        onPress={() => setSelectedButton('signup')}
                    >
                        <Text style={patient.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PatientOnboard;
