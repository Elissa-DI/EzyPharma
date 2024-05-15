import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Link } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const doctors = [
    {
        name: 'Dr. Rishi',
        specialty: 'Cardiologist',
        rating: 4.7,
        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Anemar Roger',
        specialty: 'Dentist',
        rating: 4.7,
        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Nallarasi',
        specialty: 'Orthopaedic',
        rating: 4.7,
        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Nihal',
        specialty: 'Cardiologist',
        rating: 4.7,
        clinic: 'Legacy clinic',
        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Rishita',
        specialty: 'Cardiologist',
        rating: 4.7,
        clinic: 'Legacy clinic',
        image: require('@/assets/images/doctor.png'),
    },
];

const AllDoctors = () => {
    return (
        <ScrollView style={tw`flex-1 bg-white`}>
            <View style={tw`p-4`}>
                <TouchableOpacity style={tw`flex-row items-center gap-24 py-4 px-1`}>
                    <Link href="../" style={tw``}>
                        <FontAwesome name="chevron-left" size={18} />
                    </Link>
                    <Text style={tw`text-2xl font-bold mb-4`}>Top Doctors</Text>
                </TouchableOpacity>
                {doctors.map((doctor, index) => (
                    <TouchableOpacity key={index} style={tw`bg-gray-100 border border-gray-300 p-2 rounded-lg gap-4 mb-4 flex-row items-center`}>
                        <View style={tw`p-1 rounded-xl`}>
                            <Image source={doctor.image} style={tw` rounded-lg`} />
                        </View>
                        <View style={tw`gap-1 h-24 w-4/7`}>
                            <Text style={tw`text-lg font-bold`}>{doctor.name}</Text>
                            <Text style={tw`text-gray-500`}>{doctor.specialty}</Text>
                            <Text style={tw`text-blue-700 bg-blue-100 w-10 rounded`}>★ {doctor.rating}</Text>
                            {doctor.clinic &&
                                <Text style={tw`text-gray-500 `}>
                                    <Ionicons name='location' />
                                    {doctor.clinic}
                                </Text>
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default AllDoctors