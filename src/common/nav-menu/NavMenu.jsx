import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./NavMenu.css";

const NavMenu = ({ setPage, activePage }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(newPage) {
        setAnchorEl(null);
        setPage(newPage)
    }

    return (
        <div className="nav-menu">
            <Button
                aria-owns={anchorEl ? 'nav-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {'▼' + activePage}
            </Button>
            
            <Menu id="nav-menu" className="hover-override" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={event => handleClose('Home')}>Home</MenuItem>
                <MenuItem onClick={event => handleClose('Resume')}>Resume</MenuItem>
                <MenuItem onClick={event => handleClose('Work')}>Work History</MenuItem>
                <MenuItem onClick={event => handleClose('Tech')}>Tech Experience</MenuItem>
            </Menu>
        </div>
    );
}

export default NavMenu;