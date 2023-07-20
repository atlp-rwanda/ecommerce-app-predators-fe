/* eslint-disable @typescript-eslint/no-empty-interface */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { setRoles } from '../../redux/action/AdminAction';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

const API_URL = 'https://ecommercepredators.onrender.com/api';

interface RootState {
  // Define your root state here if needed
}

describe('setRoles', () => {
  let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });
  it('dispatches the correct actions on role update failure', async () => {
    const id = 123;
    const setRole = 2;
    const errorMessage = 'Rejected';

    const token = 'mockToken';
    localStorage.setItem('token', token);


    mock.onPost(`${API_URL}/setRole/${id}`, { setRole }, ).reply(500, errorMessage);

    await store.dispatch(setRoles({ id, setRole }));

    const actions = store.getActions();

    expect(actions[0].type).toEqual('admin/setRoles/pending');
    expect(actions[1].type).toEqual('admin/setRoles/rejected');
    expect(actions[1].error?.message).toEqual(errorMessage);
  });
});
