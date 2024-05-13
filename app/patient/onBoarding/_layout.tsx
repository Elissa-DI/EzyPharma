import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { patient } from '@/constants/styles/patient';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

const PatientOnboard = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const handleBack = () => {
        router.canGoBack();
    };

    const handleSignup = () => {
        setSelectedButton('signup')
        router.navigate('patient/signup')
    }
    const handleLogin = () => {
        setSelectedButton('login')
        router.navigate('patient/login')
    }

    return (
        <View style={patient.container}>
            <View style={patient.header}>
                <TouchableOpacity onPress={handleBack} style={patient.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={patient.centerDiv}>
                <View style={patient.centerDiv}>
                    <Image
                        source={require('@/assets/icons/ezy.svg')}
                        style={patient.logoImg}
                    />
                    <Text style={patient.name}>EzyPharma</Text>
                </View>
                <View style={patient.centerDiv}>
                    <Text style={patient.title}>Let's get started</Text>
                    <Text style={patient.subtitle}>Login to stay healthy and fit</Text>
                    <View style={patient.centerDiv}>
                        <TouchableOpacity
                            style={[patient.onBoardButton, selectedButton === 'login' && { backgroundColor: 'blue' }]}
                            onPress={handleLogin}
                        >
                            <Text style={[patient.buttonText, selectedButton === 'signup' && { color: 'white' }]}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[patient.onBoardButton, selectedButton === 'signup' && { backgroundColor: 'blue' }]}
                            onPress={handleSignup}
                        >
                            <Text style={[patient.buttonText, selectedButton === 'signup' && { color: 'white' }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PatientOnboard;
