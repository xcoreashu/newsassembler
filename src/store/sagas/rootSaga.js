import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchArticlesSaga } from './Articles';

export function* watchArticles() {
  yield takeEvery(actionTypes.FETCH_ARTICLES, fetchArticlesSaga);
}
