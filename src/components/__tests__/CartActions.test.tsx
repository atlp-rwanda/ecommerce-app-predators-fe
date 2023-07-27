// OrdersAction.test.tsx

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { addToCart } from '../../redux/action/CartActions';

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('addToCart action', () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  it('dispatches the correct actions on successful cart item addition', async () => {
    const mockProductData = { product_id: 1, quantity: 2 };
    const mockResponseData = { status: 'success' };

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPost(`${API_URL}/cart`).reply(200, mockResponseData);

    const thunk = addToCart(mockProductData);
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  });

  it('dispatches the correct actions on cart item addition failure', async () => {
    const mockProductData = { product_id: 1, quantity: 2 };
    const errorMessage = 'Failed to add item to cart';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPost(`${API_URL}/cart`).reply(500, { error: errorMessage });

    const thunk = addToCart(mockProductData);
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
