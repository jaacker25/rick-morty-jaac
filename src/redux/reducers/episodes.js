import {type as findEpisodesType} from '../actions/findEpisodes';

const defaultState={};

function reducer(state=defaultState, {type, payload}){
    switch(type){
        case findEpisodesType:{
            //...
        }
        default:
        return state;
    }
}

export default reducer;