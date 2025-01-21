import { Dimensions, StyleSheet } from "react-native"
import { themas } from "../../global/themes"

//console.log(Dimensions.get('window').height/3)

export const s = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        boxTop: {
            height:Dimensions.get('window').height/3,
            //backgroundColor: 'red',
            width:'100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        boxMid: {
            height:Dimensions.get('window').height/4,
            //backgroundColor: 'green',
            width: '100%',
            paddingHorizontal: 37
            
        },
        boxBottom: {
            height: Dimensions.get('window').height/3,
            //backgroundColor: 'blue',
            width: '100%',
            alignItems: 'center',
        },
        logo:{
            width:80,
            height:80
        },
        title:{
            fontWeight: 'bold',
            marginTop: 40,
            fontSize:18
        },
        titleInput:{
           marginLeft:5,
           color: themas.colors.gray,
           marginTop: 20
        },
        boxInput:{
            width: '100%',
            height:40,
            borderWidth: 1,
            borderRadius: 10,
            marginTop:10,
            flexDirection:"row",
            alignItems: 'center',
            paddingHorizontal: 5,
            backgroundColor: themas.colors.bgScreen,
            borderColor: themas.colors.lighGray
        },
        input:{
            height:'100%',
            width:'90%',
            borderRadius: 10,
        },
        button:{
            width:250,
            height:50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themas.colors.primary,
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        },
        textButton:{
            fontSize:16,
            color: '#FFFF',
            fontWeight: 'bold'
        },
        textBottom: {
            fontSize:16,
            color: themas.colors.gray
        }
    }
)