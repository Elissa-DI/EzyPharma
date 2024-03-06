import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "./style";
import Dimension from '@/constants/Dimension';

export const patient = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    backButton: {
        paddingRight: 10,
    },
    centerDiv: {
        alignItems: 'center',
        marginVertical: 5
    },
    buttonText: {
        color: 'blue',
        textAlign: 'center',
    },
    logoImg: {
        width: Dimension.width - 200,
        height: 250,
        resizeMode: 'contain'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#223A6A'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    subtitle: {
        color: '#221F1F'
    },
    onBoardButton: {
        justifyContent: 'center',
        marginVertical: 5,
        width: Dimension.width - 110,
        height: 50,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 200,
        color: 'black'
    }
})