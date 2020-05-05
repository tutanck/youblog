import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import MainFeaturedPost from '../component/MainFeaturedPost';
import FeaturedPost from '../component/FeaturedPost';
import posts from '../static/resources/blog-post';
import Pagination from 'material-ui-flat-pagination';
import paginate from 'paginate-array';

const useStyles = makeStyles((theme) => ({
  paginatorContainer: {
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
export default function Blog({ lang }) {
  const classes = useStyles();

  const [head, ...news] = posts.news;

  const numItemsPerPage = 6;

  const [
    { currentPage, perPage, total, totalPages, data },
    setPaginatedCollection,
  ] = useState(paginate(news, undefined, numItemsPerPage));

  const offset = (currentPage - 1) * perPage;

  console.log('====================================');
  console.log(currentPage, perPage, total, totalPages, data, offset);
  console.log('====================================');

  return (
    <Container maxWidth="lg">
      <Header lang={lang} />

      <main>
        <MainFeaturedPost post={head} lang={lang} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={8} key={'featured'}>
            <Grid container spacing={4}>
              {data.map((post) => (
                <FeaturedPost key={post.slug} post={post} lang={lang} />
              ))}
            </Grid>
          </Grid>

          <Sidebar lang={lang} />

          <Grid
            item
            xs={12}
            key={'paginator'}
            className={classes.paginatorContainer}
          >
            <Pagination
              limit={perPage}
              offset={offset}
              total={total}
              onClick={(e, offset) =>
                setPaginatedCollection(
                  paginate(news, offset / perPage + 1, numItemsPerPage),
                )
              }
              previousPageLabel="<"
              nextPageLabel=">"
            />
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}

Blog.propTypes = {
  lang: PropTypes.object.isRequired,
};
