import {type as findSuggestionsType} from '../actions/findSuggestions'
import {getAllCharacters} from '../../services/index'
const defaultState=[{
    id: 1,
    name: "Rick Sanchez"},
    {
        id: 2,
        name: "Morty Smith"}];

 function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findSuggestionsType:{
            const regex = new RegExp(`^${payload}`,'i');
            getAllCharacters().then((items)=>{
                console.log(85,items.results.filter(n=>regex.test(n.name)))
                state=[...items.results.filter(n=>regex.test(n.name))];
                return state;
               // return state;
            })
            
            
            
            //return items.results.filter(n=>regex.test(n.name));
        }

        default:
        return state;
    }
}

export default reducer;