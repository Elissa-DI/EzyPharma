import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const hospitals = [
    {
        name: 'King Faisal Hospital',
        image: require('@/assets/images/faisal1.png'),
        rating: 3.7,
        reviews: 109,
        type: 'Hospital',
        location: 'Kigali',
        hours: 'Open 24 hours',
        contact: '0788 123 200',
    },
    {
        name: 'CHUK (University Teaching Hospital of Kigali)',
        image: require('@/assets/images/faisal1.png'),
        rating: 4.4,
        reviews: 28,
        type: 'University',
        location: 'Kigali',
        hours: 'Open 24 hours',
        contact: '0788 304 005',
    },
    {
        name: 'Rwanda Military Hospital',
        image: require('@/assets/images/faisal1.png'),
        rating: 4.7,
        reviews: 28,
        type: 'Hospital',
        location: 'Kigali',
        hours: 'Open 24 hours',
    },
    {
        name: 'CHUB (University Teaching Hospital of Butare)',
        image: require('@/assets/images/faisal1.png'),
        rating: 4.7,
        reviews: 28,
        type: 'University',
        location: 'Butare',
        hours: 'Open 24 hours',
    },
    {
        name: 'Rwamagana Hospital',
        image: require('@/assets/images/faisal1.png'),
        rating: 4.0,
        reviews: 33,
        type: 'Hospital',
        location: 'Rwamagana',
        hours: 'Open 24 hours',
        contact: '+254727019819',
    },
];

const AllHospitals = () => {
    return (
        <ScrollView style={tw`flex-1 bg-white`}>
            <View style={tw`p-4`}>
                <TouchableOpacity style={tw`flex-row items-center gap-24 py-4 px-1`}>
                    <Link href="../" style={tw``}>
                        <FontAwesome name="chevron-left" size={18} />
                    </Link>
                    <Text style={tw`text-2xl font-bold mb-4`}>Top Doctors</Text>
                </TouchableOpacity>
                {hospitals.map((hospital, index) => (
                    <TouchableOpacity key={index} style={tw`bg-gray-100 p-3 rounded-lg mb-4 flex-row gap-2`}>
                        <View style={tw`bg-red-100 w-24 h-24 rounded-xl`}>
                            <Image source={hospital.image} style={tw`w-full h-full rounded-xl mb-4`} />
                        </View>
                        <View>
                            <Text style={tw`font-bold`}>{hospital.name}</Text>
                            <Text style={tw`text-blue-700 mb-2`}>{hospital.rating} ★ ({hospital.reviews}) · {hospital.type}</Text>
                            <Text style={tw`text-gray-500`}>📍 {hospital.location}</Text>
                            <View style={tw`flex-row`}>
                                <Text style={tw`text-gray-500`}>🕒 {hospital.hours}</Text>
                                {hospital.contact && <Text style={tw`text-gray-500`}>📞 {hospital.contact}</Text>}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default AllHospitals