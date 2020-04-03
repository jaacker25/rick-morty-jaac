import {type as findSuggestionsType} from '../actions/findSuggestions';

const defaultState={};

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findSuggestionsType:{
            //...
        }
        default:
        return state;
    }
}

export default reducer;