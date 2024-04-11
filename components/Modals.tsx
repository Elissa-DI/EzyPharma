// Modals.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface Props {
  visible: boolean;
  onClose: () => void;  
}

const EditProfileModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black`}>
        <View style={tw`bg-white p-4 rounded-lg`}>
          <Text>Edit profile modal content</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={tw`text-blue-500 mt-2`}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const MySavedModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black`}>
        <View style={tw`bg-white p-4 rounded-lg`}>
          <Text>My saved modal content</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={tw`text-blue-500 mt-2`}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const PaymentMethodModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black`}>
        <View style={tw`bg-white p-4 rounded-lg`}>
          <Text>Payment method modal content</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={tw`text-blue-500 mt-2`}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const FAQsModal = ({ visible, onClose }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 justify-center items-center bg-opacity-50 bg-black`}>
        <View style={tw`bg-white p-4 rounded-lg`}>
          <Text>FAQs modal content</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={tw`text-blue-500 mt-2`}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export { EditProfileModal, MySavedModal, PaymentMethodModal, FAQsModal };
