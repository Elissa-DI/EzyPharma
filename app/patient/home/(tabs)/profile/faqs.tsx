import { View, Text, Platform, UIManager } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'
// import { AccordionList } from 'react-native-accordion-list-view';
import { AccordionList } from 'react-native-accordion-list-view';

const FAQs = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I place an order?",
      answer: "You can place an order by browsing through our catalog, selecting the items you need, and proceeding to checkout. Follow the on-screen instructions to complete your order."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, online banking, and cash on delivery (COD). You can choose your preferred payment option during checkout."
    },
    {
      id: 3,
      question: "How long does delivery take?",
      answer: "Delivery times may vary depending on your location and the availability of the items you ordered. Generally, we strive to deliver your order within 2-3 business days."
    },
    {
      id: 4,
      question: "What if I need to return an item?",
      answer: "If you need to return an item due to any reason such as wrong product delivered or damaged item, please contact our customer support team within 7 days of receiving your order. We will assist you with the return process and provide a refund or replacement as applicable."
    }
  ];

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <View>
      <View style={tw`flex-row items-center gap-32 mt-10 py-4 px-4`}>
        <Link href="../" style={tw`border p-[7px] border-gray-400 rounded-md`}>
          <FontAwesome name="chevron-left" size={18} />
        </Link>
        <Text style={tw`font-bold text-xl `}>FAQ</Text>
      </View>
      <View style={tw`bg-gray-200`}>
        <AccordionList
          data={faqs}
          customTitle={item => <Text style={tw`font-semibold`}>{item.question}</Text>}
          customBody={item => <Text>{item.answer}</Text>}
          animationDuration={400}
          expandMultiple={false}
          
        />
      </View>
    </View>
  )
}

export default FAQs