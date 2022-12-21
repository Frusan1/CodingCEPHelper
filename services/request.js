import api from "./api"

export async function getCEP(cep){
    try
    {
    const infos = await api.get('/'+cep+'/json/')
    console.log(infos.data)
    return infos.data
    }
    catch(error){
    console.log(error)
    return {}
    }
  }
