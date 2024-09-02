import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.png'; // Ensure the logo image is correctly placed

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, textAlign: 'right', paddingTop: 2 }}>
      <List>
        <ListItem button component="a" href="/" onClick={handleDrawerToggle}>
          <ListItemText primary="الرئيسية" />
        </ListItem>
        <ListItem button component="a" href="/#about" onClick={handleDrawerToggle}>
          <ListItemText primary="من نحن؟" />
        </ListItem>
        <ListItem button component="a" href="/#platform" onClick={handleDrawerToggle}>
          <ListItemText primary="المنصة" />
        </ListItem>
        <ListItem button component="a" href="/#content" onClick={handleDrawerToggle}>
          <ListItemText primary="محتوانا" />
        </ListItem>
        <ListItem button component="a" href="/#offers" onClick={handleDrawerToggle}>
          <ListItemText primary="عروضنا" />
        </ListItem>
        <ListItem button component="a" href="/login" onClick={handleDrawerToggle}>
          <ListItemText primary="تسجيل الدخول" />
        </ListItem>
        <ListItem button component="a" href="/register" onClick={handleDrawerToggle}>
          <ListItemText primary="سجل مجانا" sx={{ color: '#28a745' }} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" sx={{ boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '10px', md: '10px 20px' } }}>
        <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="WalidAcademy Logo" height={50} style={{ transition: 'transform 0.3s' }} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
          <Button component="a" href="/" sx={{ color: '#343a40', textDecoration: 'none' }}>
            الرئيسية
          </Button>
          <Button component="a" href="/#about" sx={{ color: '#343a40', textDecoration: 'none' }}>
            من نحن؟
          </Button>
          <Button component="a" href="/#platform" sx={{ color: '#343a40', textDecoration: 'none' }}>
            المنصة
          </Button>
          <Button component="a" href="/#content" sx={{ color: '#343a40', textDecoration: 'none' }}>
            محتوانا
          </Button>
          <Button component="a" href="/#offers" sx={{ color: '#343a40', textDecoration: 'none' }}>
            عروضنا
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
          <Button component="a" href="/login" sx={{ color: '#343a40', textDecoration: 'none' }}>
            تسجيل الدخول
          </Button>
          <Button component="a" href="/register" variant="contained" color="success">
            سجل مجانا
          </Button>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
