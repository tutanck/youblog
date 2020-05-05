import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import posts from '../static/resources/blog-post';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { social } from '../static/resources/json';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    color: 'black',
  },
}));

const socialIcons = {
  GitHub: GitHubIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
};

export default function Sidebar({ lang }) {
  const classes = useStyles();

  console.log('====================================');
  console.log(social);
  console.log('====================================');

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {lang.about_title}
        </Typography>

        <Typography>{lang.about_section}</Typography>
      </Paper>

      {posts.archives.length > 0 && (
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          {lang.archives}
        </Typography>
      )}

      {posts.archives.map(({ title, slug }) => (
        <Link
          key={slug}
          display="block"
          variant="body1"
          href={`/blog/archives/${slug}`}
        >
          {title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        {lang.social}
      </Typography>

      <Grid container direction="column" spacing={1} alignItems="center">
        {social.map(({ name, url }) => {
          const SocialIcon = socialIcons[name];

          return (
            <Link key={name} display="block" variant="body1" href={url}>
              <Grid container direction="row" spacing={1} alignItems="center">
                <Grid item>{SocialIcon && <SocialIcon />}</Grid>
                <Grid item>{name}</Grid>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
}
Sidebar.propTypes = {
  lang: PropTypes.object.isRequired,
};
