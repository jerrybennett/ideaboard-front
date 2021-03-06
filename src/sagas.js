import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, start worker saga
export function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: 'GET',
    url: `https://cors-anywhere.herokuapp.com/http://dog.ceo/api/breeds/image/random`
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    // const idea = yield call(addIdea(idea));
    // dispatch a success action to the store with the new dog

    yield put({ type: 'API_CALL_SUCCESS', dog });
    // yield put({ type: 'ADD_IDEA', idea });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}


function addIdea(idea) {
  return function(dispatch) {
    dispatch({
      type: "ADD_IDEA",
      payload: idea
    })
  }
}
