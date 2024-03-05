import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "./style";
import Dimension from '@/constants/Dimension';

export const patient = StyleSheet.create({
    logoImg: {
        width: Dimension.width - 200,
        height: 250,
        resizeMode: 'contain'
    },
    onBoardButton: {
        marginVertical: 5,
        width: Dimension.width - 100,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 200,
    }
})