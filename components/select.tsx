import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const DeliverySelect = () => {
    const [selected, setSelected] = useState(false);

    const handlePress = () => {
        setSelected(!selected);
    };

    return (
        <TouchableOpacity style={flexRow,itemsCenter]} onPress={handlePress}>
            <View style={w6,h6,border,roundedFull,justifyCenter,itemsCenter, selected ?bgBlue500 : '']}>
                {selected && <Text style={teite,fontBold]}>✓</Text>}
            </View>
            <Text style={ml2, textBase}>Delivery</Text>
        </TouchableOpacity>
    );
};

export default DeliverySelect;
