import {StyleSheet} from 'react-native';


export const styles=StyleSheet.create({
    container:{
        backgroundColor:'#4e4e4e',
        alignItems:'center',
        justifyContent:'center',
      },
      purple:{
          color:'#9C27B0',
          fontSize:20,
          textAlign:'center'
      },
      textViewStyle:{
        flex:1,
        backgroundColor:'#0000FF',
        marginHorizontal:30,
        marginVertical:15,
        justifyContent:'center',
        textAlign:'center',
        borderColor:'#000000',
        borderWidth:3
      },
      textInputViewComponentStyle:{
        flex:1,
        borderColor:'#000000',
        borderWidth:3, 
        marginHorizontal:30,
        marginVertical:15
      },
      buttonReset:{
        marginRight:10,
        marginLeft:30,
        flex:1,
        marginTop:15,
        borderColor:'#000000',
        borderWidth:3
      },
      buttonSubmit:{
        marginLeft:10,
        marginRight:30,
        flex:1,
        borderColor:'#000000',
        borderWidth:3,
        marginTop:15
      },
      textViewStyleNoFlex:{
        backgroundColor:'#0000FF',
        marginHorizontal:30,
        marginVertical:15,
        justifyContent:'center',
        textAlign:'center',
        borderColor:'#000000',
        borderWidth:3
      },
      sideBar:{
        flex:1,
        alignSelf:'stretch',
        position:'absolute',
        right:0,
        backgroundColor:'#00BFFF',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
      }


});

export default styles;