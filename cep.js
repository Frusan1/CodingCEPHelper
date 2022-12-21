import React, {useState } from "react";
import { Text,View} from 'react-native';



function infoCEP({route,navigation}) {
  const [CEP,setCEP]=useState(route.params.sucesso.cep)
  const [logradouro,setlogradouro]=useState(route.params.sucesso.logradouro)
  const [bairro,setbairro]=useState(route.params.sucesso.bairro)
  const [localidade,setlocalidade]=useState(route.params.sucesso.localidade)
  const [uf,setuf]=useState(route.params.uf)


  console.log(CEP)
  
  
  
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#f1f1f1"}}>
       <Text style={{color:"#000",fontSize:24,textAlign:"center"}}>{logradouro}</Text>
       <Text
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:6,width:350,height:60,borderRadius:3,fontSize:18,padding:10,paddingTop:12}}
       autoCapitalize="none"
    
      >CEP: {CEP}
       </Text>
       <Text
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:6,width:350,height:60,borderRadius:3,fontSize:18,padding:10,paddingTop:12}}
       autoCapitalize="none"
    
      >Cidade: {localidade}
       </Text>
       <Text
       style={{backgroundColor:"#e1e1e1",color:"#000",margin:6,width:350,height:60,borderRadius:3,fontSize:18,padding:10,paddingTop:12}}
       autoCapitalize="none"
    
      >Bairro: {bairro}
       </Text>
       
       
    </View>
  );
};

export default infoCEP;