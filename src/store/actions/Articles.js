import * as actionTypes from './actionTypes';

export const fetchArticles = route => {
  return {
    type: actionTypes.FETCH_ARTICLES,
    route
  };
};

export const fetchArticlesStart = () => {
  return {
    type: actionTypes.FETCH_ARTICLES_START
  };
};

export const fetchArticlesSuccess = articles => {
  return {
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    articles: articles
  };
};

export const fetchArticlesFail = error => {
  return {
    type: actionTypes.FETCH_ARTICLES_FAIL,
    error: error
  };
};
