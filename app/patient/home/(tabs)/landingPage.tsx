import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Feather, FontAwesome } from '@expo/vector-icons';

//Images
import article1 from '@/assets/images/article1.png';
import { router } from 'expo-router';
const { height } = Dimensions.get('window');

const landingPage = () => {
    const name = 'Ruchita';
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
    const articles = [
        {

            id: 1,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 6
        },
        {
            id: 2,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 3
        },
        {
            id: 3,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            id: 4,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            id: 5,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 3
        },
        {
            id: 6,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            id: 7,
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        }
    ]
    const handleBookmarks = () => {
        setIsBookmarked(!isBookmarked)
    }

    const handleRedirectPharmacy = () => {
        router.navigate('/patient/home/searchPharmacy')
    }
    return (
        <View>
            <View style={tw`flex-row pt-12 bg-[#D5ECF4]`}>
                <View style={tw`w-1/2 px-5 gap-3 py-2`}>
                    <View>
                        <Image
                            source={require('@/assets/images/home_profile.png')}
                        />
                    </View>
                    <View>
                        <Text style={tw`font-semibold text-xl`}>Welcome!</Text>
                        <Text style={tw`text-xl text-gray-700 mb-2`}>{name}</Text>
                        <Text style={tw`text-gray-400`}>How is it going today?</Text>
                    </View>
                </View>
                <View style={tw`w-1/2`}>
                    <Image
                        source={require('@/assets/images/home1.png')}
                        style={tw`w-4/5`}
                    />
                </View>
            </View>
            <View style={tw`w-full rounded-full items-center `}>
                <View style={tw`items-center my-8 gap-7`}>
                    <View style={tw`w-4/5 flex-row items-center border border-gray-300 rounded-full p-2`}>
                        <Feather name="search" size={24} color="gray" style={tw`mr-2`} />
                        <TextInput
                            style={tw`flex-1 h-6 px-4`}
                            placeholder="Search doctors, pharmacies or drugs"
                            onChangeText={text => setSearchQuery(text)}
                            value={searchQuery}
                        />
                    </View>
                    <View style={tw`flex flex-row px-10 gap-5`}>
                        <View style={tw`items-center`}>
                            <TouchableOpacity style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}>
                                <FontAwesome name='stethoscope' size={22} color='white' />
                            </TouchableOpacity>
                            <Text style={tw`font-semibold`}>Top doctors</Text>
                        </View>
                        <View style={tw`items-center`}>
                            <TouchableOpacity style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}>
                                <FontAwesome name='hospital-o' size={22} color='white' />
                            </TouchableOpacity>
                            <Text style={tw`font-semibold px-2`}>Referral hospitals</Text>
                        </View>
                        <View style={tw`items-center`}>
                            <TouchableOpacity
                                style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}
                                onPress={handleRedirectPharmacy}
                            >
                                <FontAwesome name='stethoscope' size={22} color='white' />
                            </TouchableOpacity>
                            <Text style={tw`font-semibold`}>Pharmacy</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`px-6`}>
                    <View style={tw`flex-row justify-between my-3 `}>
                        <Text style={tw`font-bold text-xl`}>Health article</Text>
                        <TouchableOpacity>
                            <Text style={tw`text-blue-600 items-center justify-center`}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ScrollView style={tw`flex-grow gap-2`}>
                            {articles.map((article) => (
                                <View
                                    key={article.id}
                                    style={tw`h-18 flex-row p-1 gap-3 border border-gray-400 rounded-md`}
                                >
                                    <View>
                                        <Image
                                            source={require('@/assets/images/article1.png')}
                                            style={tw`h-[95%] w-19`}
                                        />
                                    </View>
                                    <View style={tw`gap-1 w-full`}>
                                        <View style={tw`flex-row w-[70%] justify-between p-1`}>
                                            <View style={tw`w-4/5`}>
                                                <Text style={[tw`font-bold`, { fontSize: 10 }]}>{article.title}</Text>
                                            </View>
                                            <View style={tw``}>
                                                <TouchableOpacity
                                                    onPress={handleBookmarks}
                                                >
                                                    <FontAwesome
                                                        name={isBookmarked ? 'bookmark' : 'bookmark-o'}
                                                        size={16}
                                                        color='blue'
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={tw`flex-row gap-4`}>
                                            <Text style={[tw`text-gray-500`, { fontSize: 10 }]}>{article.postedDate}</Text>
                                            <Text style={[tw`text-gray-500`, { fontSize: 10 }]}>{article.timeRead}min read</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default landingPage