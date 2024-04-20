import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import Dimension from '@/constants/Dimension';
import Colors from '@/constants/Colors';

import { styles } from '@/constants/styles/intro';
import { Link, router } from 'expo-router';
import React from 'react';
import tw from "twrnc";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { BackHandler } from 'react-native';

const Layout = () => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleDone = () => {
    setShow(true); // Set show state to true when "Done" button is clicked
  };

  const buttonLabel = (label: string) => {
    return (
      <View>
        <Text>{label}</Text>
      </View>
    );
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleLoginContinue = () => {
    console.log("Selected option:", selectedOption);
    if (selectedOption === 'patient') {
      router.navigate('/patient/login');
    } else if (selectedOption === 'pharmacy') {
      router.navigate('/pharmacy/login');
    } else if (selectedOption === 'hospital') {
      router.navigate('/hospital/login');
    } else {
      router.navigate('/error');
    }
  };

  const handleSignupContinue = () => {
    console.log("Selected option for signup:", selectedOption);
    if (selectedOption === 'patient') {
      router.navigate('/patient/signup');
    } else if (selectedOption === 'pharmacy') {
      router.navigate('/pharmacy/signup');
    } else if (selectedOption === 'hospital') {
      router.navigate('/hospital/signup');
    } else {
      router.navigate('/error');
    }
  }

  useEffect(() => {
    const handleBackPress = () => {
      if (!show) {
        setShow(false);
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [show]);

  const slides = [
    {
      id: 1,
      title: 'Find a lot of specialist doctors in one place',
      image: require('../../assets/images/intro1.png'),
    },
    {
      id: 2,
      title: 'Get advice only from a doctor you believe in.',
      image: require('../../assets/images/intro2.png')
    },
    {
      id: 3,
      title: 'Find pharmacy near you',
      subtitle: 'It\'s easy to find pharmacy that is near to your location. With just one tap.',
      image: require('../../assets/images/intro3.png')
    },
    {
      id: 4,
      title: 'Tailor your experience',
      content: (
        <View style={styles.doneView}>
          <Image
            source={require('@/assets/images/intro4.png')}
            style={styles.doneImg}
          />
          <Text style={styles.title}>Tailor your experience</Text>
          <Text style={[styles.subtitle, tw`text-gray-500`]}>To provide with good experience, please select your role below:</Text>
          <View style={tw`mt-10 gap-4`}>
            <TouchableOpacity onPress={() => handleOptionSelect('patient')} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: selectedOption === 'patient' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                {selectedOption === 'patient' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
              </View>
              <Text style={tw`ml-8 text-gray-600 font-semibold`}>Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionSelect('hospital')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: selectedOption === 'hospital' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                {selectedOption === 'hospital' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
              </View>
              <Text style={tw`ml-8 text-gray-600 font-semibold`}>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionSelect('pharmacy')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: selectedOption === 'pharmacy' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                {selectedOption === 'pharmacy' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
              </View>
              <Text style={tw`ml-8 text-gray-600 font-semibold`}>Pharmacy</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity onPress={handleContinue} style={{ backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 }}>
            <Text style={{ color: 'white' }}>Continue</Text>
          </TouchableOpacity> */}
        </View>
      )
    }
  ];

  if (!show) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          if (item.content) {
            return item.content;
          } else {
            return (
              <View style={styles.introView}>
                <Image
                  source={item.image}
                  style={styles.introImg}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.subtitle, tw`text-gray-500`]}>
                  {item.subtitle}
                </Text>
              </View>
            );
          }
        }}
        activeDotStyle={{
          backgroundColor: Colors.primary,
          width: 30
        }}
        showSkipButton
        renderNextButton={() => {
          return (
            <View style={tw`bg-blue-600 p-3 rounded-full`}>
              <Ionicons
                name='arrow-forward'
                color="white"
                size={20}
              />
            </View>
          );
        }}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => {
          // return (
          //   <View style={tw`bg-blue-600 p-3 rounded-full`}>
          //     <Ionicons
          //       name='checkmark'
          //       color="white"
          //       size={20}
          //     />
          //   </View>
          // );
          if (selectedOption !== '') {
            // If an option is selected, render the "Done" button
            return (
              <TouchableOpacity
                onPress={handleDone}
                style={tw`bg-blue-600 p-3 rounded-full`}
              >
                <Ionicons
                  name='checkmark'
                  color="white"
                  size={20}
                />
              </TouchableOpacity>
            );
          } else {
            // If no option is selected, return null to hide the "Done" button
            return null;
          }
        }}
        onDone={handleDone}
      />
    );
  }

 

  return (
    <View style={tw`w-full px-5`}>
      <View style={tw`flex-row items-center gap-28 mt-10 py-4`}>
        <TouchableOpacity onPress={() => setShow(false)}>
          <FontAwesome name="chevron-left" size={18} />
        </TouchableOpacity>
      </View>
      <View style={tw`mt-28 items-center`}>
        <Image
          source={require(`../../assets/images/icon.png`)}
          style={tw`h-[110px]  w-[123px]`}
        />
        <Text style={tw`text-blue-800 font-bold text-2xl mt-2`}>EzyPharma</Text>
      </View>
      <View style={tw`w-full mt-5 items-center`}>
        <Text style={tw`font-bold text-xl`}>Let's get started!</Text>
        <Text style={tw`text-gray-500`}>Login to Stay healthy and fit </Text>
        <View style={tw`w-full items-center gap-4 mt-10`}>
          <TouchableOpacity
            onPress={handleLoginContinue}
            style={tw`w-4/5 bg-blue-500 p-4 border border-blue-600 items-center rounded-full`}
          >
            <Text style={tw`text-white font-semibold`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignupContinue}
            style={tw`w-4/5 bg-blue-500 p-4 border border-blue-600 items-center rounded-full`}
          >
            <Text style={tw`text-white font-semibold`}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Layout;
