import React from 'react';
import {styles} from '../styles'
import { Platform } from 'react-native';
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
    StatusBar,
    Button,
    TouchableOpacity
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

  class PageOne extends React.Component{
    
      constructor(props){
        super(props);
        this.state={
            name:'',
            nameError:'',
            surname:'',
            surnameError:'',
            email:'',
            emailError:'',
            message:'',
            messageError:'',
            isAllFieldsValidated:false,
            colorOfComponents:'#000000'
        }
      }
      
     
      nameSurnameValidator(){
            let onlyLetter=/^[a-zA-z]+$/;
            let emailValidRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            let isNameValid=onlyLetter.test(this.state.name);
            let isSurnameValid=onlyLetter.test(this.state.surname);
            
            if(isNameValid && isSurnameValid && !emailValidRegex.test(this.state.email)===false && this.state.message!=''){
                this.setState({isAllFieldsValidated:true})    
            }else
                this.setState({isAllFieldsValidated:false})

            if(this.state.name==""){
                this.setState({nameError:'İsim kısmı boş olamaz.'});
            }else if(!isNameValid){
                this.setState({nameError:'İsim kısmında numara kullanmayınız.'});
            }else{
                this.setState({nameError:''})
            }
            if(this.state.surname==""){
                this.setState({surnameError:'Soyadı kısmı boş olamaz.'});
            }else if(!isSurnameValid){
                this.setState({surnameError:'Soyadı kısmında numara kullanmayınız.'});
            }else{
                this.setState({surnameError:''})
            }
            if(this.state.email==""){
                this.setState({emailError:'Email kısmı boş olamaz.'});
            }else if(emailValidRegex.test(this.state.email)===false){
                this.setState({emailError:'Email geçerli değil.(Mailinizin sonunda boşluk karakteri kullanmamaya dikkat edin)'})
            }else{
                this.setState({emailError:''})
            }
            if(this.state.message==""){
                this.setState({messageError:'Mesaj kısmı boş olamaz.'});
            }else{
                this.setState({messageError:''})
            }

      }
    
      render(){
        if(Platform.OS==='web'){
            return(
                <SafeAreaView style={{flex:1,flexDirection:'row',alignSelf:'scretch'}}>
                    <View style={{flex:1,alignSelf:'stretch'}}>
                        <Button title="Menu Item" color="#72B877" onPress={()=> this.setState({ colorOfComponents:"#72B877" })}></Button>
                        <Button title="Menu Item" color="#B453A1" onPress={()=> this.setState({ colorOfComponents:"#B453A1" })}></Button>
                        <Button title="Menu Item" color="#6D11B0" onPress={()=> this.setState({ colorOfComponents:"#6D11B0" })}></Button>
                        <Button title="Menu Item" color="#4B78E7" onPress={()=> this.setState({ colorOfComponents:"#4B78E7" })}></Button>
                        <Button title="Menu Item" color="#E30B16" onPress={()=> this.setState({ colorOfComponents:"#E30B16" })}></Button>
                        <Button title="Menu Item" color="#8C7474" onPress={()=> this.setState({ colorOfComponents:"#8C7474" })}></Button>
                        <Button title="Menu Item" color="#646874" onPress={()=> this.setState({ colorOfComponents:"#646874" })}></Button>
                        <Button title="Menu Item" color="#3ECDE4" onPress={()=> this.setState({ colorOfComponents:"#3ECDE4" })}></Button>
                        <Button title="Menu Item" color="#B01B58" onPress={()=> this.setState({ colorOfComponents:"#B01B58" })}></Button>
                        <Button title="Menu Item" color="#9BF381" onPress={()=> this.setState({ colorOfComponents:"#9BF381" })}></Button>
                        <Button title="Menu Item" color="#540FE5" onPress={()=> this.setState({ colorOfComponents:"#540FE5" })}></Button>
                    </View>
                    <View style={{flex:5,alignSelf:'stretch'}}>
                        <View style={{flex:1,alignSelf:'stretch'}}> </View>
                        <ScrollView >
                            <View style={styles.textViewStyle } >
                                <Text style={{color:'#9C27B0'},styles.purple}>ONE</Text>
                                <Text>Burasu Web</Text>
                            </View>
                            <View style={styles.textInputViewComponentStyle}>
                                <TextInput placeholder='Name'
                                    textAlign='center'
                                    value={this.state.name}
                                    onBlur={()=>this.nameSurnameValidator()}
                                    onChangeText={(text)=>{this.setState({name:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                                
                            </View> 
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.nameError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Surname'
                                textAlign='center'
                                value={this.state.surname}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({surname:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
        
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.surnameError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Email'
                                textAlign='center'
                                value={this.state.email}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({email:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.emailError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Your Message'
                                textAlign='center'
                                value={this.state.message}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({message:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.messageError}</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.buttonReset}>
                                    
                                    <Button title='RESET' color={this.state.colorOfComponents} disabled={(this.state.email==''&&this.state.name==''&&
                                    this.state.surname==''&&this.state.message=='')}
                                    onPress={()=> this.setState({name:'',surname:'',email:'',message:''})}></Button>
                                </View>
                                <View style={styles.buttonSubmit} >
                                    <Button title='SUBMIT' color={this.state.colorOfComponents} disabled={this.state.isAllFieldsValidated==true? false:true} onPress={() =>
                                            this.props.navigation.navigate('SecondScreen')
                                        }></Button>
                                </View>
                            </View>
                            
                          
                        </ScrollView>
                <View style={{flex:1}}>
                  <Text
                    style={styles.purple,{textAlign:'center',backgroundColor:this.state.colorOfComponents,color:'#9C27B0',fontSize:20,paddingVertical:15}}
                    placeholderTextColor="#9C27B0">Footer       
                  </Text>
                </View>
                           
                    </View>
                    <View style={styles.sideBar,{backgroundColor:'#00BFFF'}}><Text style={{alignItems:'center'}} textAlign='center'>Sidebar</Text></View>
                </SafeAreaView>
                );
        }else{
            return(
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1}}>
                        <ScrollView >
                            <View style={styles.textViewStyle } >
                                <Text style={{color:'#9C27B0'},styles.purple}>ONE</Text>
                                <Text>Burası MOBİL</Text>
                            </View>
                            <View style={styles.textInputViewComponentStyle}>
                                <TextInput placeholder='Name'
                                    textAlign='center'
                                    value={this.state.name}
                                    onBlur={()=>this.nameSurnameValidator()}
                                    onChangeText={(text)=>{this.setState({name:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                                
                            </View> 
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.nameError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Surname'
                                textAlign='center'
                                value={this.state.surname}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({surname:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
        
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.surnameError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Email'
                                textAlign='center'
                                value={this.state.email}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({email:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.emailError}</Text>
                            <View style={styles.textInputViewComponentStyle}>
                                
                                <TextInput placeholder='Your Message'
                                textAlign='center'
                                value={this.state.message}
                                onBlur={()=>this.nameSurnameValidator()}
                                onChangeText={(text)=>{this.setState({message:text})}}
                                    style={{height:40},styles.purple}
                                    placeholderTextColor="#9C27B0">
                                        
                                </TextInput>
                            </View>
                            <Text style={{color:'red',textAlign:'center'}}>{this.state.messageError}</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.buttonReset}>
                                    
                                    <Button title='RESET' disabled={(this.state.email==''&&this.state.name==''&&
                                    this.state.surname==''&&this.state.message=='')}
                                    onPress={()=> this.setState({name:'',surname:'',email:'',message:''})}></Button>
                                </View>
                                <View style={styles.buttonSubmit} >
                                    <Button title='SUBMIT' disabled={this.state.isAllFieldsValidated==true? false:true} onPress={() =>
                                            this.props.navigation.navigate('SecondScreen')
                                        }></Button>
                                </View>
                            </View>
                            
                          
                        </ScrollView>
                        <View>
                  <Text
                    style={styles.purple,{textAlign:'center',backgroundColor:'#808000',color:'#9C27B0',fontSize:20,paddingVertical:15}}
                    >Footer       
                  </Text>
                </View>
                           
                    </View>
                </SafeAreaView>
                );
        }
        
          
      }
  }
export default PageOne;
