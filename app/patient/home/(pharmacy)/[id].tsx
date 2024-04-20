import { View, Text, TextInput, TouchableOpacity, Image, Alert, Modal, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router'
import { Feather, FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'
import { useRoute } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { Toast, useToast } from 'react-native-toast-notifications';

interface Medicine {
    image: string;
    name: string;
    capacity: string;
    price: string;
    addedOnCart: boolean;
}

const PharmacyDetails = () => {
    // const { name } = useRoute().params;
    const route = useRoute();
    // const { name } = route.params;
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [prescriptionImage, setPrescriptionImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const toast = useToast();

    const chooseImageFromLibrary = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });
        } catch (error) {
            console.log('Error picking image: ', error);
        }
    };

    const takePicture = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 1,
            });
        } catch (error) {
            console.log('Error taking picture: ', error);
        }
    };

    const populars: Medicine[] = [
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Paracetamol',
            capacity: '40pcs',
            price: '$5.09',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Panadol',
            capacity: '18pcs',
            price: '$11.00',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Amoxixillin',
            capacity: '30pcs',
            price: '$7.49',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Ibuprofen',
            capacity: '20pcs',
            price: '$15.09',
            addedOnCart: false
        },
    ]

    const popularss: Medicine[] = [
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Paracetamol',
            capacity: '40pcs',
            price: '$5.09',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Panadol',
            capacity: '18pcs',
            price: '$11.00',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Amoxixillin',
            capacity: '30pcs',
            price: '$7.49',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Ibuprofen',
            capacity: '20pcs',
            price: '$15.09',
            addedOnCart: false
        },
    ]

    const productsOnSale = [
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Nanadol',
            capacity: '20pcs',
            initialPrice: '$15.09',
            currentPrice: '$10.04',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Panadol',
            capacity: '20pcs',
            initialPrice: '$15.09',
            currentPrice: '$10.04',
            addedOnCart: false
        },
        {
            image: 'https://p7.hiclipart.com/preview/240/444/931/acetaminophen-fever-oral-administration-pharmacy-child-child.jpg',
            name: 'Paracetamol',
            capacity: '20pcs',
            initialPrice: '$15.09',
            currentPrice: '$10.04',
            addedOnCart: false
        },
    ]

    // const handleMedicinePress = (popular: Medicine) => {
    //     const url = `/patient/home/(pharmacy)/medicineDetails?popular`;
    //     // router.navigate('/patient/home/(pharmacy)/medicineDetails', popular);
    //     router.navigate(url);
    // };
    const params = useLocalSearchParams();
    const { image, name, capacity, price, addedOnCart } = params;
    const handleMedicinePress = () => {
        router.navigate('patient/home/(pharmacy)/medicineDetails');
        // router.push({ pathname: "/patient/home/(pharmacy)/medicineDetails", params: { image, name, capacity, price, addedOnCart } });
    };

    //Searching
    const [filteredMedicine, setFilteredMedicine] = useState<Medicine[]>(populars);
    const allMedicine: Medicine[] = [...populars, ...popularss, ...productsOnSale];

    const filterMedicine = (query: string) => {
        const filtered = allMedicine.filter(medicine =>
            medicine.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMedicine(filtered);
    };

    // const filterMedicine = (query: string) => {
    //     const filtered = populars.filter(medicine =>
    //         medicine.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setFilteredMedicine(filtered);
    // };

    const handleSearchChange = (text: string) => {
        setSearchQuery(text);
        filterMedicine(text);
    };

    const handleAddToCart = () => {
        try {
            toast.show('Added to cart');
            console.log('Added to cart');
        } catch (error) {
            console.error('Error showing toast:', error);
        }
    };
    

    return (
        <View style={tw``}>
            <View style={tw`w-full flex-row items-center gap-10 mt-10 py-4 px-4`}>
                <View style={tw`w-[10%]`}>
                    <Link href="../">
                        <FontAwesome name="chevron-left" size={18} />
                    </Link>
                </View>
                <View style={tw`w-[65%] items-center`}>
                    <Text style={tw`font-bold text-xl`}>{name}</Text>
                </View>
            </View>
            <View>
                <View style={tw`px-4`}>
                    <View style={tw`w-full flex-row items-center border border-gray-300 rounded-full p-2`}>
                        <Feather name="search" size={24} color="gray" style={tw`mr-2`} />
                        <TextInput
                            style={tw`flex-1 h-6 px-4`}
                            placeholder="Search drugs ..."
                            onChangeText={handleSearchChange}
                            value={searchQuery}
                        />
                    </View>
                    <View style={tw`flex-row bg-blue-100 rounded-xl mt-5`}>
                        <View style={tw` px-5 justify-center w-[65%]`}>
                            <Text style={tw`font-bold text-xl`}>Order quickly with Prescription</Text>
                            <TouchableOpacity
                                style={tw`w-5/6 bg-blue-500 p-2 rounded-md mt-2`}
                                // onPress={handleUploadPress}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={tw`text-white font-bold`}>Upload Prescription</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`w-[28%] items-center`}>
                            <Image
                                source={require('@/assets/images/pres.png')}
                                style={tw`w-24`}
                            />
                        </View>
                    </View>
                </View>

                <View style={tw`mt-7`}>
                    <View style={tw`flex-row justify-between mb-4 px-4`}>
                        <Text style={tw`font-bold text-xl`}>Popular products</Text>
                        <TouchableOpacity style={tw`justify-center`}>
                            <Text style={tw`font-semibold text-blue-600`}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <FlatList
                    data={filteredMedicine} // Use your filtered data here
                    numColumns={2} // Render two columns
                    // horizontal={true}
                    scrollEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tw`border border-gray-300 rounded-xl py-2 px-3 gap-2 mr-3`}
                            onPress={handleMedicinePress}
                        >
                            <View>
                                <Image
                                    source={require('@/assets/images/pop.png')}
                                    style={tw`w-28 h-20`}
                                />
                            </View>
                            <View>
                                <View>
                                    <Text style={tw`font-bold`}>{item.name}</Text>
                                    <Text style={tw`font-bold text-gray-500`}>{item.capacity}</Text>
                                </View>
                                <View style={tw`flex-row justify-between mt-2`}>
                                    <Text style={tw`font-black`}>{item.price}</Text>
                                    <TouchableOpacity style={tw`bg-blue-500 p-1 rounded`}>
                                        <FontAwesome name='plus' color='white' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                /> */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={tw`pl-1`}
                    >
                        {/* {populars.map((popular, index) => ( */}
                        {filteredMedicine.map((popular, index) => (
                            <TouchableOpacity
                                key={index}
                                style={tw`border border-gray-300 rounded-xl py-2 px-3 gap-2 mr-3`}
                                onPress={handleMedicinePress}
                            >
                                <View>
                                    <Image
                                        source={require('@/assets/images/pop.png')}
                                        // source={{ uri: popular.image }}
                                        style={tw`w-28 h-20`}
                                        onError={(error) => console.log('Image loading error:', error)}
                                    />
                                </View>
                                <View>
                                    <View>
                                        <Text style={tw`font-bold`}>{popular.name}</Text>
                                        <Text style={tw`font-bold text-gray-500`}>{popular.capacity}</Text>
                                    </View>
                                    <View style={tw`flex-row justify-between mt-2`}>
                                        <Text style={tw`font-black`}>{popular.price}</Text>
                                        <TouchableOpacity style={tw`bg-blue-500 p-1 rounded`}>
                                            <FontAwesome name='plus' color='white' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={tw`pl-1 mt-2`}
                    >
                        {/* {populars.map((popular, index) => ( */}
                        {filteredMedicine.map((popular, index) => (
                            <TouchableOpacity
                                key={index}
                                style={tw`border border-gray-300 rounded-xl py-2 px-3 gap-2 mr-3`}
                                onPress={handleMedicinePress}
                            >
                                <View>
                                    <Image
                                        source={require('@/assets/images/pop.png')}
                                        style={tw`w-28 h-20`}
                                    />
                                </View>
                                <View>
                                    <View>
                                        <Text style={tw`font-bold`}>{popular.name}</Text>
                                        <Text style={tw`font-bold text-gray-500`}>{popular.capacity}</Text>
                                    </View>
                                    <View style={tw`flex-row justify-between mt-2`}>
                                        <Text style={tw`font-black`}>{popular.price}</Text>
                                        <TouchableOpacity
                                            style={tw`bg-blue-500 p-1 rounded`}
                                        // onPress={() => {
                                        //     toast.show('Added to cart');
                                        //     console.log('Added to cart');

                                        // }}
                                        onPress={handleAddToCart}
                                        >
                                            <FontAwesome name='plus' color='white' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={tw`pl-1 mt-4`}
                    >
                        {productsOnSale.map((productOnSale, index) => (
                            <View
                                key={index}
                                style={tw`border border-gray-300 rounded-xl py-2 px-3 gap-2 mr-3`}
                            >
                                <View>
                                    <Image
                                        source={require('@/assets/images/pop.png')}
                                        style={tw`w-28 h-20`}
                                    />
                                </View>
                                <View>
                                    <View>
                                        <Text style={tw`font-bold`}>{productOnSale.name}</Text>
                                        <Text style={tw`font-bold text-gray-500`}>{productOnSale.capacity}</Text>
                                    </View>
                                    <View style={tw`flex-row mt-2 gap-2 items-center`}>
                                        <Text style={tw`font-black`}>{productOnSale.currentPrice}</Text>
                                        <Text style={tw`line-through text-[10px]`}>{productOnSale.initialPrice}</Text>
                                        <TouchableOpacity style={tw`bg-blue-500 p-1 rounded`}>
                                            <FontAwesome name='plus' color='white' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView> */}
                </View>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                    <View style={tw`w-4/5 bg-white p-4 rounded-md`}>
                        <Text style={tw`text-lg font-bold mb-4`}>Choose Option</Text>
                        <TouchableOpacity
                            style={tw`bg-blue-500 p-2 rounded-md mb-2`}
                            onPress={chooseImageFromLibrary}
                        >
                            <Text style={tw`text-white font-bold text-center`}>From Library</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`bg-blue-500 p-2 rounded-md mb-2`}
                            onPress={takePicture}
                        >
                            <Text style={tw`text-white font-bold text-center`}>Take a Picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`bg-red-500 p-2 rounded-md`}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={tw`text-white font-bold text-center`}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PharmacyDetails