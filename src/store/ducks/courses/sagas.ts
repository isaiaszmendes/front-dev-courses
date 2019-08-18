import { call, put } from 'redux-saga/effects';
import api from '../../../services';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const { data } = yield call(api.get, '/courses');
    yield put(loadSuccess(data.courses));
  } catch (err) {
    yield put(loadFailure());
  }
}
