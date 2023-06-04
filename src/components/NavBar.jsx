

import {AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Collections } from '@mui/icons-material/';

const Header = styled(AppBar)`
 Background: #445A6F;
 position: static;
`

const NavBar = () => {
    return (
        <Header>
            <Toolbar>
                <Collections />
                <Typography variant='h5'>Image Finder</Typography>
            </Toolbar>
        </Header>
    )
}


export default NavBar;