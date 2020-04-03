import axios from 'axios'
import findSuggestions from '../redux/actions/findSuggestions';


const baseURL = 'https://rickandmortyapi.com/api/character/'

const myService=axios.create({baseURL});


export const getAllCharacters=async()=>{
    const {data}=await myService.get();
    return data;
};
/*
export function getAllCharacters(){
 return(dispatch)=>{
     return myService.get().then((response)=>{
         dispatch(findSuggestions(response))
     })
 }
}
*/


export const getCharacter=async characterID=>{
    const {data}=await myService.get(`/${characterID}`);
    return data;
};


