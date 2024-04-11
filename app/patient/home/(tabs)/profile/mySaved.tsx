import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'
import Paracetamol from '@/assets/images/saved1.png'

const MySaved = () => {
  const favorites = [
    {
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 4,
      isFavorite: true,
    },
    {
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 4,
      isFavorite: true,
    },
    {
      image: Paracetamol,
      name: 'Paracetamol',
      volume: '75ml',
      rating: 3,
      isFavorite: true,
    }
  ]
  return (
    <View style={tw`px-4`}>
      <View style={tw`flex-row items-center gap-28 mt-10 py-4 px-1`}>
        <Link href="../">
          <FontAwesome name="chevron-left" size={18} />
        </Link>
        <Text style={tw`font-bold text-xl`}>My saved</Text>
      </View>
      <View>
        <SafeAreaView>
          {favorites.map((favorite, index) => (
            <View key={index}>
              <View style={tw`flex-row items-center justify-between px-1`}>
                <Image
                  source={favorite.image}
                  height={30}
                  width={30}
                />
                <Text style={tw`font-bold`}>{favorite.name}</Text>
              </View>
              <View style={tw`flex-row items-center justify-between px-1`}>
                <View>
                  <Text style={tw`text-gray-400 font-bold`}>{favorite.volume}</Text>
                  <View style={tw`flex-row gap-1`}>
                    {[...Array(favorite.rating)].map((_, i) => (
                      <FontAwesome key={i} name="star" size={16} color="blue" />
                    ))}
                    <Text style={tw`text-blue-600 font-bold`}>{favorite.rating}.0</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity>
                    <Ionicons name='heart' color='red' size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`border-t border-gray-400 my-2`} />
            </View>
          ))}
        </SafeAreaView>
      </View>
    </View>
  )
}

export default MySaved