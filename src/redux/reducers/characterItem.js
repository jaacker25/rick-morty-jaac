import {type as findCharacterItemType} from '../actions/findCharacterItem';

const defaultState={};

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findCharacterItemType:{
            //...
        }
        default:
        return state;
    }
}

export default reducer;