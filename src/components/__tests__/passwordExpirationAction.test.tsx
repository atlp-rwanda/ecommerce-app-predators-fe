// PasswordExpirationAction.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { passwordExpirationAction } from '../../redux/action/passwordExpirationAction'; // Replace with the correct path

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('passwordExpirationAction action', () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  it('dispatches the correct actions on successful password expiration fetch', async () => {
    const mockExpirationData = { daysRemaining: 5 };

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/usersRestrict`).reply(200, mockExpirationData);

    const thunk = passwordExpirationAction();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  });

  it('dispatches the correct actions on password expiration fetch failure', async () => {
    const errorMessage = 'Failed to fetch password expiration';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/usersRestrict`).reply(500, { error: errorMessage });

    const thunk = passwordExpirationAction();
    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await thunk(dispatch, getState, undefined);
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }


  });
});
