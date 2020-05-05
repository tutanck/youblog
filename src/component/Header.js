import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { sections, actions } from '../static/resources/json';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    color: 'black',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: blueGrey[700],
  },
  headerBtn: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default function Header({ lang }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          noWrap
          variant="h5"
          component="h2"
          align="left"
          color="inherit"
          className={classes.toolbarTitle}
        >
          {lang.blog_name}
        </Typography>

        <Button
          href={actions.action_left}
          size="small"
          color="secondary"
          className={classes.headerBtn}
        >
          {lang.action_left}
        </Button>

        <Button
          href={actions.action_right}
          size="small"
          color="primary"
          variant="outlined"
          className={classes.headerBtn}
        >
          {lang.action_right}
        </Button>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            noWrap
            color="inherit"
            variant="body2"
            href={section.url}
            key={section.name}
            className={classes.toolbarLink}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  lang: PropTypes.object.isRequired,
};
