import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Autocomplete from '../autocomplete';

function Page(props) {
    const {text, suggestions, onChangeText, onChangeSelection} = props;

    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({
            ...state,
            [side]: open
        });
    };

    return (
        <AppBar position="static"
            style={
                {
                    background: '#36b1c8',
                    position: 'fixed',
                    opacity: '0.8'
                }
        }>
            <Toolbar className="appbar">
                <IconButton edge="start" color="inherit"
                    onClick={
                        toggleDrawer('left', true)
                }>
                    <MenuIcon/>
                </IconButton>

                <Drawer open={
                        state.left
                    }
                    onClose={
                        toggleDrawer('left', false)
                }>


                    <div style={
                            {
                                height: '100vh',
                                width: '100vw',
                                backgroundColor: '#181818',
                                color: 'wite'
                            }
                        }
                        role="presentation"
                        onClick={
                            toggleDrawer('left', false)
                        }
                        onKeyDown={
                            toggleDrawer('left', false)
                    }>
                        <List style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }
                        }>
                            <ListItem to={"/"}
                                component={Link}>
                                <img style={
                                        {
                                            width: '18%',
                                            paddingTop: '0',
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }
                                    }
                                    alt="home"
                                    src="https://res.cloudinary.com/jaacker25/image/upload/v1585909758/rickMorty/HOME_ppyebl.png"></img>
                            </ListItem>
                            <ListItem to={"/characters"}
                                component={Link}>
                                <img style={
                                        {
                                            width: '33%',
                                            paddingTop: '0',
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }
                                    }
                                    alt="home"
                                    src="https://res.cloudinary.com/jaacker25/image/upload/v1585909758/rickMorty/CHARACTERS_jvwjhf.png"></img>
                            </ListItem>
                            <ListItem to={"/episodes"}
                                component={Link}>
                                <img style={
                                        {
                                            width: '27%',
                                            paddingTop: '0',
                                            marginLeft: 'auto',
                                            marginRight: 'auto'
                                        }
                                    }
                                    alt="home"
                                    src="https://res.cloudinary.com/jaacker25/image/upload/v1585909758/rickMorty/EPISODES_p5yl2a.png"></img>
                            </ListItem>
                        </List>
                    </div>

                </Drawer>




                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}/>
                    
            </Toolbar>

        </AppBar>

    )
}

export default Page;
