import React from 'react';
import {styles} from '../styles'
import { 
  SafeAreaProvider,
  SafeAreaView } from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    ActivityIndicator,
    TextComponent,
    FlatList,
    Image,
    TextInput,
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';

  class PageTwo extends React.Component{
    constructor(props){
      super(props);
    }
    state={
      textInputs:[],
    }

    validationTextInput()
    {
      const [textInputName, setTextInputName] = useState('');
      if(!textInputName.trim()){
        alert('Please Enter Name');
        return;
      }
    }
    
    render(){
      
      const FlatList_Header=()=>{
        return(
        <View style={styles.textViewStyleNoFlex } >
          <Text style={{color:'#9C27B0'},styles.purple}>TWO</Text>               
        </View>);
          
      }

      const FlatList_Footer=()=>{
        return(
        <View style={{flexDirection:"row"}}>
          <View style={styles.buttonReset}>
            <Button title='RESET' onPress={
            this.validationTextInput
            }></Button>
          </View>
          <View style={styles.buttonSubmit}>
            <Button title='SUBMIT' ></Button>
            </View>
        </View>
        );
      }
        
        var textInputField=["Name","Surname","Birthday (dd.mm.yyyy)","Your Message"];
        return(
        
        <View style={{ flex: 1, marginTop: 20 }}>
          
        <FlatList
          style={{ flex: 1, marginBottom:20 }}
          data={[1, 2, 3, 4]}
          ListHeaderComponent={FlatList_Header}
          ListFooterComponent={FlatList_Footer}
          renderItem={({ item, index }) => {
            return (
              <View
                style={styles.textInputViewComponentStyle}
              >
                <TextInput
                  placeholder={textInputField[index]}
                  style={{
                    flex: 1,
                    fontSize:20
                  }}
                  onChangeText={text => {
                    let { textInputs } = this.state;
                    textInputs[index] = text;
                    this.setState({
                      textInputs,
                    });
                  }}
                  value={this.state.textInputs[index]}
                />
              </View>
            );
          }}
        />
        <View>
          <Text
            style={styles.purple,{textAlign:'center',backgroundColor:'#808000',color:'#9C27B0',fontSize:20,paddingVertical:15}}
            placeholderTextColor="#9C27B0">Footer       
          </Text>
        </View>
      </View>
        );
          
      }
}
export default PageTwo;