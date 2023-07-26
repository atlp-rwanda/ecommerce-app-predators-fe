/* eslint-disable @typescript-eslint/no-empty-interface */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { registerUser } from '../../redux/action/UserAction';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

const API_URL = 'https://ecommercepredators.onrender.com/api/';

interface RootState {
  // Define your root state here if needed
}

describe('registerUser', () => {
  let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    mock.reset();
  });

  it('dispatches the correct actions on successful registration', async () => {
    const userData = {
      "name": 'Terence Faid JABO',
      "email": 'terence@gmail.com',
      "password": '1245'
    };
    const expectedResponse = 'Registration Successfull';

    mock.onPost(`${API_URL}register`, userData).reply(200, expectedResponse);

    await store.dispatch(registerUser(userData));

    const actions = store.getActions();

    expect(actions[0].type).toEqual('user/registerUser/pending');
    expect(actions[1].type).toEqual('user/registerUser/fulfilled');
  });

  it('dispatches the correct actions on registration failure', async () => {
    const userData = {};
    const errorMessage = 'Rejected';

    mock.onPost(`${API_URL}register`, userData).reply(500, errorMessage);

    await store.dispatch(registerUser(userData));

    const actions = store.getActions();

    expect(actions[0].type).toEqual('user/registerUser/pending');
    expect(actions[1].type).toEqual('user/registerUser/rejected');
    expect(actions[1].error?.message).toEqual(errorMessage);
  });
});
