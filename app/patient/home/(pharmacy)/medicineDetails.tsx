import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Link, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useRoute } from '@react-navigation/native';

const MedicineDetails = () => {
    const [favorites, setFavorites] = useState([]);
    const [medicine, setMedicine] = useState({
        image: '',
        name: 'Panadol',
        volume: '80ml',
        rating: 4,
        isFavorite: false,
        price: '$15.09',
        addedOnCart: false,
        description: 'OBH COMBI  is a cough medicine containing, Paracetamol, Ephedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing'
    });

    const route = useRoute(); // Use useRoute hook to access route object
    const params = useLocalSearchParams();
    const { image, name, capacity, price, addedOnCart } = params;

    const toggleFavorite = () => {
        setMedicine(prevMedicine => ({
            ...prevMedicine,
            isFavorite: !prevMedicine.isFavorite
        }));
    };

    //Cart item functions
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <View style={tw`px-6`}>
            <View style={tw`w-full flex-row items-center gap-10 mt-10 py-4`}>
                <View style={tw`w-[10%]`}>
                    <Link href="../">
                        <FontAwesome name="chevron-left" size={18} />
                    </Link>
                </View>
                <View style={tw`w-[65%] items-center`}>
                    <Text style={tw`font-bold text-xl`}>{medicine.name}</Text>
                </View>
            </View>
            <View>
                <View>
                    <View style={tw`items-center my-5`}>
                        <Image
                            source={require('@/assets/images/pop.png')}
                            style={tw`w-36 h-36`}
                        />
                    </View>
                    <View style={tw`flex-row items-center justify-between`}>
                        <View style={tw`mt-5 gap-1`}>
                            <Text style={tw`font-bold text-xl text-center pr-12`}>{medicine.name}</Text>
                            <Text style={tw`text-gray-400 font-bold`}>{medicine.volume}</Text>
                            <View style={tw`flex-row gap-1`}>
                                {[...Array(medicine.rating)].map((_, i) => (
                                    <FontAwesome key={i} name="star" size={16} color="blue" />
                                ))}
                                <Text style={tw`text-blue-600 font-bold`}>{medicine.rating}.0</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={toggleFavorite}>
                                {medicine.isFavorite ? (
                                    <Ionicons name="heart" color="red" size={20} />
                                ) : (
                                    <FontAwesome name="heart-o" color="black" size={20} />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`flex-row justify-between my-5`}>
                        <View style={tw`flex-row items-center gap-5`}>
                            <TouchableOpacity onPress={decrementQuantity} style={tw``}>
                                <FontAwesome name='minus-square-o' size={32} style={tw`text-red-600 `} />
                            </TouchableOpacity>
                            <Text style={tw`font-bold text-xl`}>{quantity}</Text>
                            <TouchableOpacity onPress={incrementQuantity} style={tw``}>
                                <FontAwesome name='plus-square-o' size={32} style={tw`text-blue-600`} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={tw`font-bold text-xl`}>{medicine.price}</Text>
                        </View>
                    </View>
                    <View style={tw`gap-2 mt-2`}>
                        <Text style={tw`font-bold text-xl`}>Description</Text>
                        <Text style={tw`text-gray-500`}>{medicine.description}</Text>
                    </View>
                    <View style={tw`items-center mt-7`}>
                        <TouchableOpacity
                            style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 px-5 rounded-full`}
                            onPress={() => {
                                router.navigate('/patient/home/cart')
                            }}
                        >
                            <Text style={tw`text-white font-semibold`}>Go to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default MedicineDetails;
