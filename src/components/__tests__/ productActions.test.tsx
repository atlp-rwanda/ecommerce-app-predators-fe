// ProductAction.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchProductsCollection } from '../../redux/action/productActions'; // Replace with the correct path

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('fetchProductsCollection action', () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  it('dispatches the correct actions on successful product fetch', async () => {
    const mockResponseData = {
      data: {
        products: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
      },
    };

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPost(`${API_URL}/vendor/collection`).reply(200, mockResponseData);

    const thunk = fetchProductsCollection();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  });

  it('dispatches the correct actions on product fetch failure', async () => {
    const errorMessage = 'Something went wrong!';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPost(`${API_URL}/vendor/collection`).reply(500, { error: errorMessage });

    const thunk = fetchProductsCollection();
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
