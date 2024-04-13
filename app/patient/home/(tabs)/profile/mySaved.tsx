import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'
import Paracetamol from '@/assets/images/saved1.png'

const MySaved = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 4,
      isFavorite: true,
    },
    {
      id: 2,
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 3,
      isFavorite: false,
    },
    {
      id: 3,
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 5,
      isFavorite: true,
    },
    {
      id: 4,
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 3,
      isFavorite: true,
    },
    // {
    //   id: 5,
    //   image: Paracetamol,
    //   name: 'Paracetamol',
    //   volume: '75ml',
    //   rating: 3,
    //   isFavorite: true,
    // }
  ])

  const toggleFavorite = (id: Number) => {
    const updatedFavorites = favorites.map((favorite) =>
      favorite.id === id ? { ...favorite, isFavorite: !favorite.isFavorite } : favorite
    );
    setFavorites(updatedFavorites);
  };
  return (
    <View>
      <View style={tw`flex-row items-center gap-28 mt-10 py-4 px-4`}>
        <Link href="../" style={tw`border p-[7px] border-gray-400 rounded-md`}>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
        <Text style={tw`font-bold text-xl`}>My saved</Text>
      </View>
      <View>
        <ScrollView>
          <SafeAreaView style={tw`px-4`}>
            {favorites.map((favorite, index) => (
              <View key={index}>
                <View style={tw`w-full flex-row items-center justify-between px-1`}>
                  <Image
                    source={favorite.image}
                    style={tw`w-[100px] h-24 `}
                  />
                  <Text style={tw`font-bold text-xl text-center pr-12`}>{favorite.name}</Text>
                </View>
                <View style={tw`flex-row items-center justify-between px-1`}>
                  <View style={tw`mt-2`}>
                    <Text style={tw`text-gray-400 font-bold`}>{favorite.volume}</Text>
                    <View style={tw`flex-row gap-1`}>
                      {[...Array(favorite.rating)].map((_, i) => (
                        <FontAwesome key={i} name="star" size={16} color="blue" />
                      ))}
                      <Text style={tw`text-blue-600 font-bold`}>{favorite.rating}.0</Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity onPress={() => toggleFavorite(favorite.id)}>
                      {favorite.isFavorite ? (
                        <Ionicons name="heart" color="red" size={20} />
                      ) : (
                        <FontAwesome name="heart-o" color="black" size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={tw`border-t border-gray-400 my-4`} />
              </View>
            ))}
            <View style={tw`w-full items-center`}>
              <TouchableOpacity
                style={tw`w-4/5 bg-blue-500 p-3 items-center rounded-xl`}
              >
                <Text style={tw`text-white font-bold`}>Add new</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  )
}

export default MySaved