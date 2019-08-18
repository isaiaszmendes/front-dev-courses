import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { CoursesState } from './ducks/courses/types';

import rootReducers from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  courses: CoursesState,
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
