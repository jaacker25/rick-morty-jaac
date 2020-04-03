import './style.css'
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'

class AppBar extends Component{
    constructor(props){
        super(props);
        this.state={
          text:''
        };
    this.onChangeText=this.onChangeText.bind(this);
    this.onChangeSelection=this.onChangeSelection.bind(this);
    }
    
    
    onChangeText(text){
    console.log(this.props.suggestions)
        this.setState({text});
       this.props.findSuggestions(text);
        console.log(this.props.suggestions)
    }

    onChangeSelection(text){
        this.setState({text});
        this.props.findResults(text);
        this.props.history.push('/results')
    }


    render(){
        const {text}=this.state;
        const {suggestions}=this.props;
        return (
            <Page
                text={text}
                suggestions={suggestions}            
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}

            />
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        suggestions: state.suggestions,
    };
    };

const mapDispatchToProps ={
    findSuggestions,
    findResults,
};

    
    const wrapper = connect(mapStateToProps, mapDispatchToProps);
    const component = wrapper(AppBar);
    
    export default withRouter(component);