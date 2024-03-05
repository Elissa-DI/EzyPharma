import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo/vector-icons
import { router } from 'expo-router';
import { patient } from '@/constants/styles/patient';

const PatientOnboard = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const handleBack = () => {
        router.canGoBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
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
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[patient.onBoardButton, selectedButton === 'signup' && { backgroundColor: 'blue' }]}
                        onPress={() => setSelectedButton('signup')}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    backButton: {
        paddingRight: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default PatientOnboard;
