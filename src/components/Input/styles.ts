import { StyleSheet } from "react-native"
import { themas } from "../../global/themes"

export const s = StyleSheet.create({
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: themas.colors.bgScreen,
        borderColor: themas.colors.lighGray
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 10,
    },
    titleInput:{
        marginLeft:5,
        color: themas.colors.gray,
        marginTop: 20
     },
     icon:{
        width: "100%"
     }
})