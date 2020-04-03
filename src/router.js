import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './pages/pageNotFound';
import Home from './pages/home';
import Results from './pages/results';
import Episodes from './pages/episodes';
import Characters from './pages/characters';
import EpisodeDetail from './pages/episodeDetail';
import CharacterDetail from './pages/characterDetail';
import AppBar from './components/appBar';
import store from './redux/store';

const Router =()=>{
    return(
    <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    <AppBar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/results" component={Results}/>
        <Route exact path="/episodes" component={Episodes}/>
        <Route exact path="/characters" component={Characters}/>
        <Route exact path="/episodes/:epId" component={EpisodeDetail}/>
        <Route exact path="/characters/:chId" component={CharacterDetail}/>
        <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
    </React.StrictMode>
    </Provider>
    )
}

export default Router;