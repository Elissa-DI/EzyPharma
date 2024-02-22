import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "./style";
import Dimension from '@/constants/Dimension';

export const styles = StyleSheet.create({
    introView: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        paddingTop: 100
    },
    doneView: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        paddingTop: 50,
    },
    introImg: {
        width: Dimension.width - 80,
        height: 450,
        resizeMode: 'contain'
    },
    doneImg: {
        width: Dimension.width - 80,
        height: 300,
        resizeMode: 'contain'
    },
    title: {
        fontWeight: 'bold',
        fontSize: Dimension.h1,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    subtitle: {
        fontSize: Dimension.h5,
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15
    }


})