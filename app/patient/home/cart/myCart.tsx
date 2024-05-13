import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import { Link, router } from 'expo-router'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import tw from 'twrnc'

const MyCart = () => {
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
        const taxes = 1.00;
        return subtotal + taxes;
    };


    const [selected, setSelected] = useState(false);
    const [showDeliveryModal, setShowDeliveryModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);


    const handleDeliveryPress = () => {
        setSelected(!selected);
    };
    const handlePaymentPress = () => {
        if (!selected) {
            setShowPaymentModal(true);
        } else {
            setShowDeliveryModal(true);
        }
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handlePaymentSuccess = () => {
        setShowPaymentModal(false);
        setShowSuccessModal(true);
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
                <ScrollView style={tw`h-[560px]`} showsVerticalScrollIndicator={false}>
                    <View style={tw`border border-gray-500 rounded-xl flex-row gap-3 p-3 my-4`}>
                        <View style={tw`items-center justify-center`}>
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
                        <View style={tw`items-center justify-center`}>
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
                                <TouchableOpacity style={[tw`flex-row items-center`]} onPress={handleDeliveryPress}>
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
                            <View style={tw`border-[0.5px] border-gray-300 my-3`} />
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
                                    <TouchableOpacity style={tw`bg-blue-600 py-3 px-8 rounded-full`} onPress={handlePaymentPress}>
                                        <Text style={tw`text-white font-bold`}>Pay now</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* Delivery Modal */}
            <Modal
                visible={showDeliveryModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowDeliveryModal(false)}
            >
                <View style={tw`flex-1 justify-center items-center bg-gray-800 bg-opacity-50`}>
                    <View style={tw`w-6/7 items-center bg-white p-5 rounded-lg`}>
                        <View style={tw`w-full items-end`}>
                            <TouchableOpacity
                                onPress={() => setShowDeliveryModal(false)}
                            >
                                <FontAwesome name="times-circle-o" size={20} color='gray' />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`w-16 bg-blue-100 p-6 rounded-full my-3`}>
                            <FontAwesome name="lock" color='blue' size={25} />
                        </View>
                        <View style={tw`items-center`}>
                            <Text style={tw`font-bold text-xl mb-2`}>Delivery</Text>
                            <Text style={tw`text-gray-400 w-44`}>For delivery service confirm your location</Text>
                            <TouchableOpacity
                                style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 px-5 rounded-full`}
                                onPress={() => {
                                    router.navigate('/patient/home/cart/addLocation');
                                }}
                            >
                                <Text style={tw`text-white font-semibold`}>Confirm location</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Payment Modal */}
            <Modal
                visible={showPaymentModal || showSuccessModal}
                animationType='fade'
                transparent={true}
                onRequestClose={() => {
                    setShowPaymentModal(false);
                    setShowSuccessModal(false);
                }}
            >
                {showPaymentModal && (
                    <View style={tw`flex-1 justify-center items-center bg-gray-800 bg-opacity-50`}>
                        <View style={tw`w-6/7 items-center bg-white p-5 rounded-xl`}>
                            <View style={tw`w-full items-end`}>
                                <TouchableOpacity
                                    onPress={() => setShowPaymentModal(false)}
                                >
                                    <FontAwesome name="times-circle-o" size={20} color='gray' />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`w-full items-center gap-4`}>
                                <Text style={tw`font-bold text-xl mb-3`}>Momo Pay</Text>
                                <TextInput
                                    placeholder='*182*8*1*234567*26.98*88888#'
                                    style={tw`w-4/5 items-center px-4 py-2 rounded-md border border-gray-400`}
                                />
                                <TouchableOpacity
                                    style={tw`w-2/5 mt-5 items-center bg-blue-600 py-4 rounded-full`}
                                    onPress={handlePaymentSuccess}
                                >
                                    <Text style={tw`text-white font-bold`}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                {showSuccessModal && (
                    <View style={tw`flex-1 justify-center items-center bg-gray-800 bg-opacity-50`}>
                        <View style={tw`w-6/7 items-center bg-white p-5 rounded-lg`}>
                            <View style={tw`w-full items-end`}>
                                <TouchableOpacity
                                    onPress={() => setShowSuccessModal(false)}
                                >
                                    <FontAwesome name="times-circle-o" size={20} color='gray' />
                                </TouchableOpacity>
                            </View>
                            <View style={tw`bg-blue-100 p-6 rounded-full my-3`}>
                                <FontAwesome name="check" color='blue' size={25} />
                            </View>
                            <View style={tw`items-center gap-4`}>
                                <Text style={tw`font-bold text-xl mb-3`}>Payment success</Text>
                                <Text style={tw`text-gray-400 w-44`}>Your payment has been successful, Subscribe to get additional services from us</Text>
                                <TouchableOpacity style={tw`w-5/7 mt-5 items-center bg-blue-600 py-3 px-5 rounded-full`}
                                    onPress={() => {
                                        router.navigate('/patient/')
                                    }}>
                                    <Text style={tw`text-white font-semibold`}>Subscribe</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </Modal>
        </View>
    )
}

export default MyCart