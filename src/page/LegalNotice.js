import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Markdown from '../component/Markdown';
import { blueGrey } from '@material-ui/core/colors';
import legal_notice_fr_FR from '../static/resources/legal/legal-fr-FR.md';
import legal_notice_en_US from '../static/resources/legal/legal-en-US.md';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  markdown: {
    ...theme.typography.body2,
    color: blueGrey[800],
    padding: theme.spacing(3, 3),
  },
  welcomeBtn: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
}));

export default function LegalNotice({ lang, language }) {
  const classes = useStyles();

  const [content, setContent] = useState('');

  fetch(language === 'fr_FR' ? legal_notice_fr_FR : legal_notice_en_US)
    .then((response) => response.text())
    .then(setContent);

  return (
    <div className={classes.root}>
      <Button href="/" color="primary" className={classes.welcomeBtn}>
        {'<<<'}
      </Button>

      <Markdown className={classes.markdown}>{content}</Markdown>
    </div>
  );
}
LegalNotice.propTypes = {
  lang: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
};
