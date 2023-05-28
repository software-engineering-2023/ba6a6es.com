import { List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const MenuRoot = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

export default function SelectedMenu({ options, label }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <MenuRoot>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label={label}
          onClick={handleClickListItem}
        >
          <ListItemText primary={label} secondary={options[selectedIndex]} />
        </ListItem>
      </List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </MenuRoot>
  );
}
