import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class Characters extends Component{
render(){
    const {characters}=this.props;

    return(<Page 
        characters={characters}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        characters: state.characters,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(Characters);

export default withRouter(component);