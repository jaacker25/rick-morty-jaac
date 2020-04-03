import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class Episodes extends Component{
render(){
    const {episodes}=this.props;

    return(<Page 
        episodes={episodes}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        episodes: state.episodes,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(Episodes);

export default withRouter(component);