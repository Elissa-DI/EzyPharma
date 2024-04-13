import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const searchPharmacy = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <View style={{ flex: 1 }}>
      <View style={tw`absolute top-5 w-full px-4 gap-5`}>
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`p-1 bg-white rounded-md mr-5`}>
            <Ionicons name='arrow-back' size={18} />
          </TouchableOpacity>
          <Text style={tw`font-bold text-2xl`}>Nearby Pharmacy</Text>
        </View>
        <View style={tw`w-full flex-row items-center border border-gray-300 rounded-lg p-2`}>
          <Feather name="search" size={24} color="gray" style={tw`mr-2`} />
          <TextInput
            style={tw`flex-1 h-6 px-4`}
            placeholder="Search ..."
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          
        </MapView>
      </View>
    </View>
  )
}

export default searchPharmacy

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});