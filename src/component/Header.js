import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { sections } from '../static/resources/json';

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
}));

export default function Header({ lang }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button
          size="small"
          color="secondary"
          href="https://paypal.me/pools/c/8nXuBPoX1L"
        >
          {lang.action_left}
        </Button>

        <Typography
          noWrap
          variant="h5"
          component="h2"
          align="center"
          color="inherit"
          className={classes.toolbarTitle}
        >
          {lang.blog_name}
        </Typography>

        <Button variant="outlined" href="/app" size="small" color="primary">
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
            key={section.title}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  lang: PropTypes.object.isRequired,
};
