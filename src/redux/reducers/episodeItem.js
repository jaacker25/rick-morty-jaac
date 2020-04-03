import {type as findEpisodeItemType} from '../actions/findEpisodeItem';

const defaultState={};

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findEpisodeItemType:{
            //...
        }
        default:
        return state;
    }
}

export default reducer;