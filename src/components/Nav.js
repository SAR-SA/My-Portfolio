import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Avatar from '../assets/Avatar.JPG';
import "../styles/Nav.css";


function NavTop() {
  return (
    <div>
      <Navbar className="navBar" collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">
          <img
            src={Avatar}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        {/* <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav> */}
        <Navbar className="navBar" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand id="name">Shawn A. Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navBox mr-auto" >
              <Link to="/about" className="mr-2">About</Link>
              <Link to="/projects" className="mr-2">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
      </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
      </Navbar>
    </div>

  )
}

export default NavTop;

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Link } from "react-router-dom";


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//       <Link to="/about">About</Link>
//       <Link to="/projects">Projects</Link>
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//           <Tab label="About" {...a11yProps(0)} />
//           <Tab label="Projects" {...a11yProps(1)} />
//           <Tab label="Contact" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>

//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </div>
//   );
// }

