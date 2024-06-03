import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Link } from 'expo-router';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

interface Hospital {
    name: string;
    image: string;
    rating: number;
    reviews: number;
    type: string;
    location: string;
    hours: string;
    contact?: string;
}

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

const categories = [
    {
        icon: 'stethoscope',
        name: 'General'
    },
    {
        icon: 'home',
        name: 'General'
    },
    {
        icon: 'home',
        name: 'General'
    },
    {
        icon: 'home',
        name: 'General'
    },
    {
        icon: 'home',
        name: 'General'
    },
    {
        icon: 'home',
        name: 'General'
    }, {
        icon: 'home',
        name: 'General'
    },
]

const doctors = [
    {
        name: 'Dr. Rishi',

        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Roger',
        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Nallarasi',

        image: require('@/assets/images/doctor.png'),
    },
    {
        name: 'Dr. Nihal',
        image: require('@/assets/images/doctor.png'),
    },
];

const AllHospitals = () => {
    const [selectedHospital, setSelectedHospital] = useState<Hospital>();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [modalVisible, setModalVisible] = useState(false);


    // Function to handle click event of a hospital item
    const handleHospitalClick = (hospital: Hospital) => {
        setSelectedHospital(hospital);
        setModalVisible(true);
    };
    return (
        <ScrollView style={tw`flex-1 bg-white`}>
            <View style={tw`p-4`}>
                <View style={tw`flex-row items-center gap-24 py-4 px-1`}>
                    <TouchableOpacity>
                        <Link href="../" style={tw``}>
                            <FontAwesome name="chevron-left" size={18} />
                        </Link>
                    </TouchableOpacity>
                    <Text style={tw`text-2xl font-bold mb-4`}>Top Doctors</Text>
                </View>
                {hospitals.map((hospital, index) => (
                    <TouchableOpacity
                        key={index}
                        style={tw`bg-gray-100 p-3 rounded-lg mb-4 flex-row gap-2`}
                        onPress={() => handleHospitalClick(hospital)}
                    >
                        <View style={tw`bg-red-100 w-24 h-24 rounded-xl`}>
                            <Image source={hospital.image} style={tw`w-full h-full rounded-xl mb-4`} />
                        </View>
                        <View style={tw`flex gap-[2px]`}>
                            <Text style={tw`font-bold w-52`}>{hospital.name}</Text>
                            <View style={tw`flex-row gap-2`}>
                                <View style={tw`w-10 rounded flex-row items-center justify-center bg-blue-100 p-[1px]`}>
                                    <Text style={tw`text-blue-800`}>{hospital.rating}</Text>
                                    <Ionicons name='star' color='blue' />
                                </View>
                                <View>
                                    <Text style={tw`text-gray-500`}>({hospital.reviews}) . {hospital.type}</Text>
                                </View>
                            </View>
                            <Text style={tw`text-gray-500`}>
                                <Ionicons name='location' style={tw`mr-2`} />
                                {hospital.location}
                            </Text>
                            <View style={tw`flex-row gap-3`}>
                                <Text style={tw`text-gray-500`}>{hospital.hours}</Text>
                                {hospital.contact && <Text style={tw`text-gray-500`}>{hospital.contact}</Text>}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                <Modal visible={modalVisible} animationType="slide" presentationStyle='fullScreen' >
                    <View style={tw`flex-1 justify-center items-center bg-slate-100 p-4`}>
                        <View style={tw`absolute top-4 flex-row items-center gap-12`}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <FontAwesome name="chevron-left" size={18} color='black' />
                            </TouchableOpacity>
                            <Text style={tw`text-lg font-bold mb-1 w-64 text-center`}>{selectedHospital?.name}</Text>
                        </View>
                        <View>
                            <View style={tw`w-full flex-row items-center border border-gray-300 rounded-full p-2 mt-14`}>
                                <Feather name="search" size={24} color="gray" style={tw`mr-2`} />
                                <TextInput
                                    style={tw`flex-1 h-6 px-4`}
                                    placeholder="Find a doctor"
                                    onChangeText={text => setSearchQuery(text)}
                                    value={searchQuery}
                                />
                            </View>
                            <View style={tw`flex-row items-center justify-center justify-between my-3`}>
                                <Text style={tw`text-lg font-bold`}>Category</Text>
                                <TouchableOpacity style={tw`bg-blue-600 py-1 px-3 rounded-full`}>
                                    <Text style={tw`text-white font-semibold`}>Transfer</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tw`flex flex-wrap flex-row justify-between`}>
                                {categories.map((category, i) => (
                                    <TouchableOpacity key={i} style={tw`w-1/4 p-2 flex  items-center`}>
                                        <FontAwesome name={category.icon} size={35} color="blue" />
                                        <Text style={tw`text-gray-400`}>{category.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={tw`my-2`}>
                                <Text style={tw`text-lg font-bold mb-1`}>Recommended doctors</Text>
                                <View style={tw`relative`}>
                                    <View style={tw`absolute top-[100px] bg-gray-200 border border-gray-300 h-10 w-[90%] left-5 rounded-2xl`} />
                                    <View style={tw`absolute w-full bg-white flex flex-row border border-gray-300 rounded-2xl p-2 gap-4`}>
                                        <View style={tw`rounded-full w-28 h-28`}>
                                            <Image
                                                source={require('@/assets/images/doctor.png')}
                                                style={tw`rounded-full w-full h-full`}
                                                alt='doctor'
                                            />
                                        </View>
                                        <View style={tw`flex gap-1`}>
                                            <Text style={tw`text-lg font-bold`}>Dr. Marcus Horizon</Text>
                                            <Text style={tw`text-gray-400`}>Cardiologist</Text>
                                            <View style={tw`border border-[0.7px] bg-gray-400 border-gray-400 mt-2 mb-3`} />
                                            <View style={tw`flex-row gap-1`}>
                                                <View style={tw`w-10 rounded flex-row items-center justify-center bg-blue-100 p-[1px]`}>
                                                    <Text style={tw`text-blue-800`}>4.7</Text>
                                                    <Ionicons name='star' color='blue' />
                                                </View>
                                                <Text style={tw``}>
                                                    <Ionicons name='location' style={tw`mr-2`} />
                                                    King Faisal hospital
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`my-3 mt-36`}>
                                <Text style={tw`text-lg font-bold mb-1`}>Our recent doctors</Text>
                                <View style={tw`flex flex-wrap flex-row justify-between`}>
                                    {doctors.map((doctor, i) => (
                                        <View key={i} style={tw`w-1/4`}>
                                            <Image
                                                source={doctor.image}
                                                style={tw`rounded-full w-18 h-18`}
                                                alt='doctor'
                                            />
                                            <Text style={tw`font-semibold`}>{doctor.name}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default AllHospitals