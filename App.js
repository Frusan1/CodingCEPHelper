import {useEffect,useState} from 'react';
import { View, Text, Alert, TouchableOpacity,TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import   infoCEP from './cep';
import { getCEP } from './services/request';





function HomeScreen({navigation}) {
  const [CEP , setCEP] = useState([])
  


  async function pesquisar (){
    const sucesso = await getCEP(CEP);
    console.log(sucesso)
   
    if(sucesso){
      navigation.navigate("Informações",{sucesso})
    }
    else{
      Alert.alert('Não foi possível encontrar esse CEP')
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

   
      <Text style={{marginBottom:15,fontSize:25,textAlign:'center'}}>Digite um CPF para fazer a consulta</Text>

     
       <TextInput
       style={{backgroundColor:"#808080",color:"#ffffff",margin:6,height:90,borderRadius:8,width:300,fontSize:16,padding:6,}}
       placeholder="CEP"
       autoCapitalize="none"
       onChangeText={setCEP}
       keyboardType="number-pad">
       
       </TextInput>

       <TouchableOpacity style={{ height: 65,borderRadius:8, marginTop: 10,backgroundColor:"#4b6043",width:200}}  onPress={pesquisar}>
         <Text style={{color:"#ffffff",textAlign:"center",textAlignVertical:"center",margin:10,fontSize:20}}>Pesquisar</Text>
       </TouchableOpacity>
    </View>
  );
}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CEP-Vem" component={HomeScreen} />
        <Stack.Screen name="Informações" component={infoCEP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;