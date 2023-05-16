import React, { useState } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FlexBetween from './FlexBetween';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, useTheme, Box, Button, Typography, Menu, MenuItem } from '@mui/material';
import { switchMode } from '../actions/generalAction';
import { signout } from '../actions/authActions';

const Navbar = (props) => {
    const mode = useSelector(state => state.general.mode)
    const dispatch = useDispatch()
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null)
    const menuOnClick = () => dispatch(signout())
    return (
        <AppBar sx={{
            position: 'static',
            background: '#243556',
            boxShadow: 'none',
        }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <FlexBetween>
                    <IconButton onClick={() => props.setIsSidebarOpen(!props.isSidebarOpen)} >
                        <MenuOutlinedIcon  sx={{ color:"white"}}/>
                    </IconButton>
                </FlexBetween>

                <FlexBetween
                    gap='1.5rem'
                >
        
                    <IconButton>
                        <NotificationsOutlinedIcon sx={{ color:"white"}} />
                    </IconButton>

                    <IconButton>
                        <SettingsOutlinedIcon sx={{ color:"white"}} />
                    </IconButton>
                    <IconButton>
                        <PersonOutlineOutlinedIcon sx={{ color:"white"}} />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;