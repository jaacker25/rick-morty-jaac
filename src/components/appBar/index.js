import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class AppBar extends Component{




render(){
    const {suggestions}=this.props;

    return(<Page 
        suggestions={suggestions}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        suggestions: state.suggestions,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(AppBar);

export default withRouter(component);