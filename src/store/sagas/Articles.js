import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/Articles';

export function* fetchArticlesSaga(action) {
  let source;
  try {
    yield put(actions.fetchArticlesStart());
    if (action.route === '/') {
      yield (source = 'google-news-in');
    } else {
      yield (source = action.route.substring(1));
    }
    const url = yield `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=631c03d66ee941998c9d2b36576b17a5`;
    const res = yield axios.get(url);
    const articles = [];
    for (let key in res.data.articles) {
      articles.push({
        id: key,
        ...res.data.articles[key]
      });
    }
    yield put(actions.fetchArticlesSuccess(articles));
  } catch (err) {
    yield put(actions.fetchArticlesFail(err));
  }
}
