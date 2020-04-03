import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class EpisodeDetail extends Component{
render(){
    const {episodeItem}=this.props;

    return(<Page 
        episodeItem={episodeItem}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        episodeItem: state.episodeItem,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(EpisodeDetail);

export default withRouter(component);