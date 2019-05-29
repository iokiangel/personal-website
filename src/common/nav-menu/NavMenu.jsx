import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./NavMenu.css";

function NavMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className="nav-menu">
            <Button
                aria-owns={anchorEl ? 'nav-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                Navigation
            </Button>
            <Menu id="nav-menu" className="hover-override" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Resume</MenuItem>
                <MenuItem onClick={handleClose}>Work Experience</MenuItem>
                <MenuItem onClick={handleClose}>Tech Experience</MenuItem>
            </Menu>
        </div>
    );
}

export default NavMenu;