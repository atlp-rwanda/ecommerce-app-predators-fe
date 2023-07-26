/* eslint-disable @typescript-eslint/no-empty-interface */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {
  fetchNotifications
} from '../../redux/action/notificationActions';
import { AnyAction } from 'redux';
interface RootState {
    // Define your root state here if needed
  }
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('notifications actions', () => {
    let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;
  
    beforeEach(() => {
      store = mockStore({});
      mock.reset();
      localStorage.clear();
    });
  
    it('fetchNotifications should dispatch the correct actions on successful fetch', async () => {
      const mockNotifications = [
        {
          id: 1,
          message: 'This is a notification',
          timestamp: '2022-01-01T12:00:00Z',
          is_read: false,
        },
      ];
      const token = 'mockToken';
      localStorage.setItem('token', token);
  
      mock.onGet(`${API_URL}/notification`).reply(200, { notifications: mockNotifications });
  
      await store.dispatch(fetchNotifications() as any);
  
      const actions = store.getActions();
  
      expect(actions[0].type).toEqual('notifications/fetchNotifications/pending');
      expect(actions[1].type).toEqual('notifications/fetchNotifications/fulfilled');
      expect(actions[1].payload).toEqual(mockNotifications);
    });
  });
