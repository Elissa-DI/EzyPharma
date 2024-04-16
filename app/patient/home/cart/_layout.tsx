import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import tw from 'twrnc'

const CartLayout = () => {
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
        <View style={tw`px-5`}>
            <View style={tw`w-full flex-row items-center gap-10 mt-10 py-4`}>
                <View style={tw`w-[10%]`}>
                    <Link href="../">
                        <FontAwesome name="chevron-left" size={18} />
                    </Link>
                </View>
                <View style={tw`w-[65%] items-center`}>
                    <Text style={tw`font-bold text-xl`}>My cart</Text>
                </View>
            </View>
            <View style={tw``}>
                <View>
                    <Image
                        source={require('@/assets/images/pop.png')}
                        style={tw`w-20 h-20`}
                    />
                </View>
                <View>
                    <View>
                        <Text style={tw`font-bold text-xl text-center pr-12`}>{medicine.name}</Text>
                        <Text style={tw`text-gray-400 font-bold`}>{medicine.volume}</Text>
                        <View style={tw`flex-row items-center gap-5`}>
                            <TouchableOpacity onPress={decrementQuantity} style={tw``}>
                                <FontAwesome name='minus-square-o' size={20} style={tw`text-red-600 `} />
                            </TouchableOpacity>
                            <Text style={tw`font-bold text-xl`}>{quantity}</Text>
                            <TouchableOpacity onPress={incrementQuantity} style={tw``}>
                                <FontAwesome name='plus-square-o' size={20} style={tw`text-blue-600`} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name='delete-outline' />
                        </TouchableOpacity>
                        <Text style={tw`font-bold text-xl`}>{medicine.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartLayout