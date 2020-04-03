import { combineReducers, createStore } from 'redux';
import suggestions from './reducers/suggestions';
import characters from './reducers/characters';
import characterItem from './reducers/characterItem';
import episodeItem from './reducers/episodeItem';
import episodes from './reducers/episodes';
import results from './reducers/results';


const reducer = combineReducers({
suggestions,
characters,
characterItem,
episodeItem,
episodes,
results,
});

const store = createStore(reducer);

export default store;