import { all, takeLatest } from 'redux-saga/effects';

import { CoursesTypes } from './courses/types';
import { load } from './courses/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CoursesTypes.LOAD_REQUEST, load),
  ]);
}
