import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class CharacterDetail extends Component{
render(){
    const {characterItem}=this.props;

    return(<Page 
        characterItem={characterItem}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        characterItem: state.characterItem,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(CharacterDetail);

export default withRouter(component);