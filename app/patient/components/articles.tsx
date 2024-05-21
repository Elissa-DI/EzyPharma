import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import tw from 'twrnc'

import article1 from '@/assets/images/article1.png';

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
];


const Articles = () => {
    const [bookmarkStatus, setBookmarkStatus] = useState<{ [key: number]: boolean }>({});
    const [showAllArticles, setShowAllArticles] = useState<boolean>(false);

    const handleBookmarks = (articleId: number) => {
        setBookmarkStatus((prevStatus) => ({
            ...prevStatus,
            [articleId]: !prevStatus[articleId],
        }));
    };
    const toggleShowAllArticles = () => {
        setShowAllArticles(!showAllArticles);
    };
    return (
        <View>
            <View style={tw`flex-row justify-between items-center mb-2`}>
                <Text style={tw`text-xl font-bold`}>Health article</Text>
                <TouchableOpacity onPress={toggleShowAllArticles}>
                    <Text style={tw`text-blue-700`}>{showAllArticles ? 'Show less' : 'See all'}</Text>
                </TouchableOpacity>
            </View>
            <View>
                {(showAllArticles ? articles : articles.slice(0, 3)).map((article) => (
                    <View
                        key={article.id}
                        style={tw`h-18 my-1 flex-row p-1 gap-3 border border-gray-400 rounded-md`}
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
                                <View>
                                    <TouchableOpacity
                                        onPress={() => handleBookmarks(article.id)}
                                    >
                                        <FontAwesome
                                            name={bookmarkStatus[article.id] ? 'bookmark' : 'bookmark-o'}
                                            size={16}
                                            color='blue'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={tw`flex-row gap-4`}>
                                <Text style={[tw`text-gray-500`, { fontSize: 10 }]}>{article.postedDate}</Text>
                                <Text style={[tw`text-gray-500`, { fontSize: 10 }]}>{article.timeRead} min read</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Articles