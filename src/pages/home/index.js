import './style.css';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Page from './page';

class Home extends Component{
render(){
    const {items}=this.props;

    return(<Page 
        items={items}

    />

    )
}
}
const mapStatetoProps=(state)=>{
    return{
        items: state.items,
    }
}

const wrapper=connect(mapStatetoProps);
const component=wrapper(Home);

export default withRouter(component);