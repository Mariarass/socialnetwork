import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Group, Logout, Message, Settings} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import {Avatar, Drawer} from "@mui/material";
import ava from '../../assets/avatar.jpg'
import {AppDispatch} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../../redux/reducers/auth-reducer";
import {photosSelector, profileSelector} from "../../redux/selectors/profile-selectors";

const drawerWidth = 240;


const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export const SideBar = () => {
    const currentProfile = useSelector(photosSelector)
    const dispatch: AppDispatch = useDispatch()
    const logout = () => {
        dispatch(logoutThunk())
    }

    console.log(currentProfile)
    return (

        <Box>
            <Drawer
                sx={{
                    width: drawerWidth,

                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: '1px solid white',
                    },
                }}
                variant="permanent"
                anchor="left">

                <DrawerHeader>
                </DrawerHeader>

                <List  sx={{}}>
                    {['profile', 'users', 'message'].map((text, index) => (
                        <NavLink key={text} to={`/${text}`} style={{textDecoration: 'none', color: 'black'}}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {text === 'profile' &&
                                            <Avatar src={ ava} sx={{width: 28, height: 28}}/>}
                                        {text === 'users' && <Group/>}
                                        {text === 'message' && <Message/>}

                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>

                        </NavLink>

                    ))}
                </List>
                <Divider/>

                <List>

                    {[ 'Login out'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                {/*    {text === 'Settings' && <Settings/>}*/}
                                    {text === 'Login out' && <Logout onClick={logout}/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>


    );
}