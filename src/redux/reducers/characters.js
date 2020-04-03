import {type as findCharactersType} from '../actions/findCharacters';

const defaultState={};

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findCharactersType:{
            //...
        }
        default:
        return state;
    }
}

export default reducer;