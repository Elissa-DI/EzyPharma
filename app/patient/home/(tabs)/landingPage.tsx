import { ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Feather, FontAwesome } from '@expo/vector-icons';

//Images
import article1 from '@/assets/images/article1.png';

const landingPage = () => {
    const name = 'Ruchita';
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false)
    const articles = [
        {
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        },
        {
            photo: article1,
            title: 'The 25 Healthiest diet You Can Eat, According to drugs you are taking',
            postedDate: 'Jul 10, 2023',
            timeRead: 5
        }
    ]
    const handleBookmarks = () => {

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
                        <Text>How is it going today?</Text>
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
                <ScrollView style={tw`w-full`}>
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
                        <View style={tw`flex flex-row gap-12`}>
                            <View style={tw`items-center`}>
                                <TouchableOpacity style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}>
                                    <FontAwesome name='stethoscope' size={22} color='white' />
                                </TouchableOpacity>
                                <Text style={tw`font-semibold`}>Top doctors</Text>
                            </View>
                            <View style={tw`items-center`}>
                                <TouchableOpacity style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}>
                                    <FontAwesome name='stethoscope' size={22} color='white' />
                                </TouchableOpacity>
                                <Text style={tw`font-semibold`}>Referral <br /> hospitals</Text>
                            </View>
                            <View style={tw`items-center`}>
                                <TouchableOpacity style={tw`h-10 w-10 bg-blue-600 rounded-full items-center justify-center`}>
                                    <FontAwesome name='stethoscope' size={22} color='white' />
                                </TouchableOpacity>
                                <Text style={tw`font-semibold`}>Pharmacy</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`px-6`}>
                        <View style={tw`flex-row justify-between `}>
                            <Text style={tw`font-bold text-xl`}>Health article</Text>
                            <TouchableOpacity>
                                <Text style={tw`text-blue-600`}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {articles.map((article, i) => (
                                <View
                                    key={i}
                                    style={tw`flex-row p-1 gap-2 border border-gray-400 rounded-md`}
                                >
                                    <View>
                                        <Image
                                            source={article.photo}
                                            style={tw`h-[90%]`}
                                        />
                                    </View>
                                    <View style={tw`gap-1`}>
                                        <View style={tw`flex-row w-[63%] justify-between p-1`}>
                                            <View style={tw`w-4/5`}>
                                                <Text style={tw`font-bold`}>{article.title}</Text>
                                            </View>
                                            <View style={tw``}>
                                                <TouchableOpacity
                                                    onPress={handleBookmarks}
                                                >
                                                    <FontAwesome
                                                        name={isBookmarked ? 'bookmark' : 'bookmark-o'}
                                                        size={18}
                                                        color='blue'
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={tw`flex-row gap-4`}>
                                            <Text style={tw`text-gray-500`}>{article.postedDate}</Text>
                                            <Text style={tw`text-gray-500`}>{article.timeRead}min read</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default landingPage