// import { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import ContactSupportIcon from "@mui/icons-material/ContactSupport";
// import { Link } from "react-router-dom";

// const BlogNavbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const navItems = [
//     { label: "View Blogs", link: "/ViewBlogs" },
//     { label: "Add Blog", link: "/addBlog" },
//     { label: "View User Interface", link: "/AllBlogs" },
//   ];

//   const NavLinks = () => (
//     <>
//       {navItems.map((item) => (
//         <ListItem button key={item.label} component={Link} to={item.link}>
//           <ListItemIcon>
//             {item.label === "Home" && <HomeIcon />}
//             {item.label === "About" && <InfoIcon />}
//             {item.label === "Contact" && <ContactSupportIcon />}
//           </ListItemIcon>
//           <ListItemText primary={item.label} />
//         </ListItem>
//       ))}
//     </>
//   );

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           onClick={toggleNav}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Blogs
//         </Typography>
//         {/* <Button color="inherit">Login</Button> */}
//       </Toolbar>
//       <Drawer anchor="left" open={isNavOpen} onClose={toggleNav}>
//         <List>
//           <NavLinks />
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default BlogNavbar;
import * as React from "react";
import { Link, useParams } from "react-router-dom";
import {
  AppBar,
  Grid,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const BlogNavbar = () => {
  const { id } = useParams();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md")); //use decresing  window size
  console.log(isMatch); //use decresing  window size

  const [value, setValue] = React.useState("one");

  const handleChange = (event = React.SyntheticEvent, newValue = string) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" top="fixed" sx={{ backgroundColor: "#0D2938" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <h4>Jayasinghe Oil Meals</h4>
          </>
        ) : (
          <Grid container>
            <Grid item xs={8}>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="#ffff"
                  indicatorColor="secondary"
                >
                  <Tab
                    to="/ViewBlogs"
                    LinkComponent={Link}
                    label="View Blogs"
                  />
                  <Tab to="/AllBlogs" LinkComponent={Link} label="All Blogs" />
                  <Tab to="/addBlog" LinkComponent={Link} label="Add Blog" />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={1}>
              <Box display="flex">
                <Button
                  to="/login"
                  LinkComponent={Link}
                  sx={{ marginLeft: 1, background: "rgba(180,58,58,1)" }}
                  variant="contained"
                >
                  SignOut
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BlogNavbar;
