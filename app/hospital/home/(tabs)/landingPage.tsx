import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

import article1 from '@/assets/images/article1.png';
import { router } from 'expo-router'

const hospitals = [
  {
    id: 1,
    name: "King Faisal Hospital",
    imageUri: "@/assets/images/faisal.png",
    specialized: "Cardiologist",
    rating: "★ 4.7",
    location: "Kigali"
  },
  {
    id: 2,
    name: "CHUK",
    imageUri: "@/assets/images/faisal.png",
    specialized: "Cardiologist",
    rating: "★ 4.4",
    location: "Kigali"
  },
  {
    id: 3,
    name: "Rwanda Medical",
    imageUri: "@/assets/images/faisal.png",
    specialized: "Cardiologist",
    rating: "★ 4.2",
    location: "Kigali"
  }
];

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

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState<any>(null);
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
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4 pt-6`}>
        <Text style={tw`text-2xl font-bold mb-4 w-56`}>Find your desire health solution</Text>
        <View style={tw`w-full flex-row items-center border border-gray-300 rounded-full p-2`}>
          <Feather name="search" size={24} color="gray" style={tw`mr-2`} />
          <TextInput
            style={tw`flex-1 h-6 px-4`}
            placeholder="Search doctors, pharmacies or drugs"
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>
        <View style={tw`flex-row justify-around my-4`}>
          <TouchableOpacity
            style={tw`items-center`}
            onPress={() => {
              router.navigate('/hospital/home/(doctors)/allDoctors')
            }}
          >
            <View style={tw`bg-blue-600 p-5 rounded-xl mb-2`}>
              <FontAwesome name='stethoscope' size={20} color='white' />
            </View>
            <Text style={tw`text-gray-500`}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`items-center`}
            onPress={() => {
              router.navigate('/hospital/home/(hospitals)/allHospitals')
            }}
          >
            <View style={tw`bg-blue-600 p-5 rounded-xl mb-2`}>
              <FontAwesome name='hospital-o' size={20} color='white' />
            </View>
            <Text style={tw`text-gray-500`}>Hospital</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`w-full bg-blue-200 p-4 rounded-lg mb-4 flex-row justify-between items-center`}>
          <View style={tw`w-6/9 flex items-start pl-2`}>
            <Text style={tw`text-blue-700 text-xl font-bold mb-2`}>Early protection for your family health</Text>
            <TouchableOpacity style={tw`bg-blue-700 py-3 rounded-full w-24 items-center`}>
              <Text style={tw`text-white`}>Learn more</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={require('@/assets/images/circle.png')} width={90} height={90} />
          </View>
        </View>
        <View style={tw`my-3`}>
          <View style={tw`flex-row justify-between items-center mb-3`}>
            <Text style={tw`text-xl font-bold`}>Top Hospitals</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-700`}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex gap-3`}>
            {hospitals.map(hospital => (
              <TouchableOpacity key={hospital.id} style={tw`w-40 border border-gray-400 rounded-xl p-4 gap-2 mr-3`}>
                <View style={tw`flex-row justify-center py-2`}>
                  <Image source={require('@/assets/images/faisal.png')} style={tw`w-24 h-24 rounded-full mb-2`} width={25} height={25} />
                </View>
                <View style={tw`flex`}>
                  <Text>{hospital.name}</Text>
                  <Text>{hospital.specialized}</Text>
                </View>
                <View style={tw`flex-row gap-2 items-start`}>
                  <Text style={tw`text-blue-700 bg-blue-100 rounded p-[1px]`}>{hospital.rating}</Text>
                  <View style={tw`flex-row items-center`}>
                    <Ionicons name='location' color='gray' />
                    <Text style={tw`text-gray-500`}>{hospital.location}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View >
        <View style={tw`mb-4`}>
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
      </View >
    </ScrollView >
  )
}

export default LandingPage