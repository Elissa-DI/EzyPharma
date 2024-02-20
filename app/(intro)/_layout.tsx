import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

import Dimension from '@/constants/Dimension';
import Colors from '@/constants/Colors';

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
  }
]

const Layout = () => {
  const [show, setShow] = useState(false);
  const handleDone = () => {
    setShow(true); // Set show state to true when "Done" button is clicked
  };
  const buttonLablel = (label: String) => {
    return (
      <View>
        <Text>
          {label}
        </Text>
      </View>
    )
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    // Navigate to another page based on the selected option
    // For demonstration, I'm just logging the selected option
    console.log("Selected option:", selectedOption);
  };

  if (!show) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: Dimension.width - 80,
                  height: 450
                }}
                resizeMode='contain'
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: Dimension.h1,
                  paddingTop: 10,
                  paddingLeft: 15,
                  paddingRight: 15
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: Dimension.h5,
                  paddingTop: 5,
                  paddingLeft: 15,
                  paddingRight: 15
                }}
              >
                {item.subtitle}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: Colors.primary,
          width: 30
        }}
        showSkipButton
        renderNextButton={() => buttonLablel("Next")}
        renderSkipButton={() => buttonLablel("Skip")}
        renderDoneButton={
          () => buttonLablel("Done")
        }
        onDone={handleDone}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 15,
        paddingTop: 50,
      }}
    >
      <Image
        source={require('@/assets/images/intro4.png')}
        style={{
          width: Dimension.width - 80,
          height: 300
        }}
        resizeMode='contain'
      />
      <Text>Tailor your experience</Text>
      <Text>To provide with good experience, please select your role below:</Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={() => handleOptionSelect('patient')} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: selectedOption === 'patient' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            {selectedOption === 'patient' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
          </View>
          <Text>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionSelect('hospital')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: selectedOption === 'hospital' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            {selectedOption === 'hospital' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
          </View>
          <Text>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionSelect('pharmacy')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: selectedOption === 'pharmacy' ? 'blue' : 'gray', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
            {selectedOption === 'pharmacy' && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'blue' }} />}
          </View>
          <Text>Pharmacy</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleContinue} style={{ backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Layout