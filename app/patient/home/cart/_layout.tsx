import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import tw from 'twrnc'
import SelectWithTick from '@/components/select'
import DeliverySelect from '@/components/select'

const CartLayout = () => {
    const [favorites, setFavorites] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [medicine, setMedicine] = useState({
        image: '',
        name: 'Panadol',
        volume: '80ml',
        rating: 4,
        isFavorite: false,
        price: 15.09,
        quantity: 1
    });
    const incrementQuantity = () => {
        setMedicine(prevMedicine => ({
            ...prevMedicine,
            quantity: prevMedicine.quantity + 1
        }));
    };
    
    const decrementQuantity = () => {
        if (medicine.quantity > 1) {
            setMedicine(prevMedicine => ({
                ...prevMedicine,
                quantity: prevMedicine.quantity - 1
            }));
        }
    };
    

    const calculateSubtotal = () => {
        return medicine.price * medicine.quantity;
    };
    
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const taxes = 1.00; // You can change this value if needed
        return subtotal + taxes;
    };
    

    const [selected, setSelected] = useState(false);

    const handlePress = () => {
        setSelected(!selected);

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
            <View>
                <View style={tw`border border-gray-500 rounded-xl flex-row gap-3 p-3 my-4`}>
                    <View style={tw`items-cnter justify-center`}>
                        <Image
                            source={require('@/assets/images/pop.png')}
                            style={tw`w-20 h-20`}
                        />
                    </View>
                    <View style={tw`w-5/7 flex-row justify-between`}>
                        <View style={tw`gap-4`}>
                            <View>
                                <Text style={tw`font-bold text-xl text-center pr-12`}>{medicine.name}</Text>
                                <Text style={tw`text-gray-500 font-bold`}>{medicine.volume}</Text>
                            </View>
                            <View style={tw`flex-row items-center gap-5`}>
                                <TouchableOpacity onPress={decrementQuantity} style={tw``}>
                                    <FontAwesome name='minus-square-o' size={20} style={tw`text-red-600 `} />
                                </TouchableOpacity>
                                <Text style={tw`font-bold text-xl`}>{medicine.quantity}</Text>
                                <TouchableOpacity onPress={incrementQuantity} style={tw``}>
                                    <FontAwesome name='plus-square-o' size={20} style={tw`text-blue-600`} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={tw`justify-between items-end`}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='delete-outline' size={20} />
                            </TouchableOpacity>
                            <Text style={tw`font-bold text-xl`}>${medicine.price}</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`border border-gray-500 rounded-xl flex-row gap-3 p-3 my-4`}>
                    <View style={tw`items-cnter justify-center`}>
                        <Image
                            source={require('@/assets/images/pop.png')}
                            style={tw`w-20 h-20`}
                        />
                    </View>
                    <View style={tw`w-5/7 flex-row justify-between`}>
                        <View style={tw`gap-4`}>
                            <View>
                                <Text style={tw`font-bold text-xl text-center pr-12`}>{medicine.name}</Text>
                                <Text style={tw`text-gray-500 font-bold`}>{medicine.volume}</Text>
                            </View>
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
                        <View style={tw`justify-between items-end`}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name='delete-outline' size={20} />
                            </TouchableOpacity>
                            <Text style={tw`font-bold text-xl`}>{medicine.price}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={tw`font-bold text-xl my-3`}>Payment Details</Text>
                    <View style={tw``}>
                        <View style={tw`flex-row justify-between my-1`}>
                            <Text style={tw`text-gray-500`}>Subtotal</Text>
                            <Text style={tw`text-gray-500`}>${calculateSubtotal().toFixed(2)}</Text>
                        </View>
                        <View style={tw`flex-row justify-between my-1`}>
                            <Text style={tw`text-gray-500`}>Delivery</Text>
                            <TouchableOpacity style={[tw`flex-row items-center`]} onPress={handlePress}>
                                <View style={[tw`w-5 h-5 border rounded-full justify-center items-center`, selected ? tw`bg-blue-500` : '']}>
                                    {selected && <Text style={[tw`text-white font-bold`]}>✓</Text>}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex-row justify-between my-1`}>
                            <Text style={tw`text-gray-500`}>Taxes</Text>
                            <Text style={tw`text-gray-500`}>$1.00</Text>
                        </View>
                        <View style={tw`flex-row justify-between my-1`}>
                            <Text style={tw`text-gray-500`}>Total</Text>
                            <Text style={tw`text-gray-500`}>${calculateTotal().toFixed(2)}</Text>
                        </View>
                        <View style={tw`border-[0.5px] border-gray my-3`} />
                        <Text style={tw`font-bold text-xl`}>Payment Details</Text>
                        <View style={tw`w-full flex-row justify-between border border-gray-500 rounded-md py-2 px-4 my-3`}>
                            <View style={tw`flex-row gap-1 items-center`}>
                                <Image
                                    source={require('@/assets/images/mtn.png')}
                                    style={tw`w-10 h-10`}
                                />
                                <Text style={tw`font-bold text-xl text-blue-800`}>Momo Pay</Text>
                            </View>
                            <View style={tw`justify-center`}>
                                <TouchableOpacity>
                                    <Text style={tw`text-gray-500`}>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={tw`flex-row justify-between mt-3`}>
                            <View>
                                <Text style={tw`text-gray-500`}>Total</Text>
                                <Text style={tw`font-bold text-xl`}>$28.94</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={tw`bg-blue-600 py-3 px-8 rounded-full`}>
                                    <Text style={tw`text-white font-bold`}>Pay now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartLayout