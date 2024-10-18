"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import List from '@mui/material/List';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.svg';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
];

const NavBar = () => {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

  const renderNavItems = (isDrawer: boolean) => (
    <>
      {NAV_ITEMS.map((item, index) => (
        isDrawer ? (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton component='a' href={item.href}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            {isDrawer && <Divider />}
          </React.Fragment>
        ) : (
          <Button
            key={index}
            color="inherit"
            href={item.href}
            sx={{
              display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
              '&:hover': {
                color: 'var(--primary)',
              },
            }}
          >
            {item.label}
          </Button>
        )
      ))}
    </>
  );

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {renderNavItems(true)}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{
        backgroundColor: '#fff',
        display: 'flext',
        alignItems: 'center',
        boxShadow: 'none',
      }}>
        <Toolbar sx={{
            color: 'black',
            background: 'var(--background)',
            width: '100%',
            maxWidth: '750px',
        }}>
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: 0.5, fontWeight: 'bold' }}>
            Starter
          </Typography>

          {renderNavItems(false)}
          <Button color="inherit" sx={{
            '&:hover': {
              color: 'var(--primary)',
            },
          }}>Login</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              ml: 2,
              display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
              '&:hover': {
                color: 'var(--primary)',
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </Box>
  );
};

export default NavBar;
