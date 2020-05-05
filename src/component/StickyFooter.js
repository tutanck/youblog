import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright({ lang }) {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      {lang.website} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

Copyright.propTypes = {
  lang: PropTypes.object.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    color: '#fff',
    backgroundColor: '#121212',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[800],
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  footerLink: {
    color: '#61dafb',
  },
}));

export default function StickyFooter({ lang }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Avatar
          alt="avatar"
          src="/static/assets/images/avatar.jpg"
          className={classes.avatar}
        />

        <Typography variant="h2" component="h1" gutterBottom>
          {lang.footer_title}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {lang.footer_section}
        </Typography>
        <Typography variant="body1">{lang.footer_quote}</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body">
            This website was created using{' '}
            <Link
              noWrap
              color="inherit"
              variant="body1"
              href={'https://github.com/tutanck/blog'}
              className={classes.footerLink}
            >
              Youblog
            </Link>
            {'.'}
          </Typography>
          <Copyright lang={lang} />
        </Container>
      </footer>
    </div>
  );
}

StickyFooter.propTypes = {
  lang: PropTypes.object.isRequired,
};
