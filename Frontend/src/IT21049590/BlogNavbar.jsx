import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link } from "react-router-dom";

const BlogNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { label: "View Blogs", link: "/ViewBlogs" },
    { label: "Add Blog", link: "/addBlog" },
    { label: "View User Interface", link: "/AllBlogs" },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <ListItem button key={item.label} component={Link} to={item.link}>
          <ListItemIcon>
            {item.label === "Home" && <HomeIcon />}
            {item.label === "About" && <InfoIcon />}
            {item.label === "Contact" && <ContactSupportIcon />}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleNav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blogs
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
      <Drawer anchor="left" open={isNavOpen} onClose={toggleNav}>
        <List>
          <NavLinks />
        </List>
      </Drawer>
    </AppBar>
  );
};

export default BlogNavbar;
