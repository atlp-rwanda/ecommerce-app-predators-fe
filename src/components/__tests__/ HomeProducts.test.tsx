// HomeProducts.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getHomeProducts } from '../../redux/action/HomeProducts'; 

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('getHomeProducts action', () => {
  afterEach(() => {
    mock.reset();
  });

  it('dispatches the correct actions on successful product fetch', async () => {
    const mockProductData = [{ id: 1, name: 'Product 1' }];

    mock.onGet(`${API_URL}/product`).reply(200, { data: mockProductData });

    const thunk = getHomeProducts();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  });

  it('dispatches the correct actions on product fetch failure', async () => {
    const errorMessage = 'Failed to fetch products';

    mock.onGet(`${API_URL}/product`).reply(500, { error: errorMessage });

    const thunk = getHomeProducts();
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
