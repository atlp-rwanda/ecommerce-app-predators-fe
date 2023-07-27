/* eslint-disable @typescript-eslint/no-empty-interface */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { resetPassword } from '../../redux/action/UserAction';
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

describe('resetPassword', () => {
  let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  it('dispatches the correct actions on successful password reset', async () => {
    const email = 'faidtere3@gmail.com';
    const expectedResponse = 'Password Reset Request Successfully!';

    mock.onPost(`${API_URL}reset/password`, { email }).reply(200, expectedResponse);

    await store.dispatch(resetPassword(email));

    const actions = store.getActions();

    expect(actions[0].type).toEqual('user/resetPassword/pending');
    expect(actions[1].type).toEqual('user/resetPassword/fulfilled');
    expect(actions[1].payload).toEqual(expectedResponse);
  });

  it('dispatches the correct actions on password reset failure', async () => {
    const email = 'test@example.com';
    const errorMessage = 'Rejected';

    mock.onPost(`${API_URL}reset/password`, { email }).reply(500, errorMessage);

    await store.dispatch(resetPassword(email));

    const actions = store.getActions();

    expect(actions[0].type).toEqual('user/resetPassword/pending');
    expect(actions[1].type).toEqual('user/resetPassword/rejected');
    expect(actions[1].error?.message).toEqual(errorMessage);
  });
});
