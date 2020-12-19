import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
  },
  boot: {
    width: '100%',
    maxWidth: 360,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}));

function Languages() {
  const classes = useStyles();
  return (
    <div className="pic-container animate__animated animate__fadeInRight">
    <div className={classes.root}>
    <Paper elevation={9} >
    <List className={classes.boot}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.blue} id="one">
            L
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Languages" secondary="HTML5, CSS3, Javascript, JQuery, React" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.orange} id="two">
            T
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Technologies" secondary="MySQL, MongoDB, Mongoose, Express, Node.js, Sequelize, Bootstrap, Material-UI, Materialize, Github, Git, Heroku" />
      </ListItem>
    </List>
    </Paper>
  </div>
  </div>
  )
}

export default Languages

{/* <ListGroup className="animate__animated animate__fadeInRight">
  <ListGroup.Item variant="primary">Languages</ListGroup.Item>
  <ListGroup.Item variant="light">HTML</ListGroup.Item>
  <ListGroup.Item variant="secondary">CSS</ListGroup.Item>
  <ListGroup.Item variant="light">Javascript</ListGroup.Item>
  <ListGroup.Item variant="secondary">React</ListGroup.Item>
  <ListGroup.Item variant="light">Node.js</ListGroup.Item>
</ListGroup> */}