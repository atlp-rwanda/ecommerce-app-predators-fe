import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Import the actions to be tested
import {
  deleteCart,
  deleteAllCarts,
  /*   getAllCarts, */
  updateCartQuantity,
} from '../../redux/action/cartAction';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CartData {
  // Define the properties of yor cart data here
}
type ApiResponse = CartData[];

const API_URL = 'https://ecommercepredators.onrender.com/api';

export const getAllCarts = createAsyncThunk(
  'cart/getAllCarts',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get<ApiResponse>(`${API_URL}/cart`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ... (other actions remain the same)

const middlewares = [thunk];
const mockStore = configureStore<
  RootState,
  ThunkDispatch<RootState, undefined, AnyAction>
>(middlewares);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RootState {
  // Define your root state here if needed
}

describe('cartAction', () => {
  let store: MockStoreEnhanced<
    RootState,
    ThunkDispatch<RootState, undefined, AnyAction>
  >;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    // Clear the actions after each test
    store.clearActions();
  });

  it('dispatches the correct actions on successful getAllCarts', async () => {
    // Mocked response data for the API call
    const mockData: unknown[] = [
      /* mocked cart data */
    ];
    axios.get = jest.fn().mockResolvedValue({ data: mockData });

    // Call the action
    await store.dispatch(getAllCarts());

    // Check the dispatched actions
    const actions = store.getActions();
    expect(actions[0].type).toEqual('cart/getAllCarts/pending');
    expect(actions[1].type).toEqual('cart/getAllCarts/fulfilled');
    expect(actions[1].payload).toEqual(mockData);
  });

  it('dispatches the correct actions on deleteCart', async () => {
    // Mocked response data for the API call
    const idToDelete = 123;
    axios.delete = jest
      .fn()
      .mockResolvedValue({ data: 'Cart deleted successfully' });

    // Call the action
    await store.dispatch(deleteCart(idToDelete));

    // Check the dispatched actions
    const actions = store.getActions();
    expect(actions[0].type).toEqual('cart/deleteCart/pending');
    expect(actions[1].type).toEqual('cart/deleteCart/fulfilled');
    expect(actions[1].payload).toEqual('Cart deleted successfully');
  });

  it('dispatches the correct actions on deleteAllCarts', async () => {
    // Mocked response data for the API call
    axios.delete = jest
      .fn()
      .mockResolvedValue({ data: 'All carts deleted successfully' });

    // Call the action
    await store.dispatch(deleteAllCarts());

    // Check the dispatched actions
    const actions = store.getActions();
    expect(actions[0].type).toEqual('cart/deleteAllCarts/pending');
    expect(actions[1].type).toEqual('cart/deleteAllCarts/fulfilled');
    expect(actions[1].payload).toEqual('All carts deleted successfully');
  });

  it('dispatches the correct actions on successful updateCartQuantity', async () => {
    // Mocked response data for the API call
    const updateData = { id: 123, quantity: 5 };
    axios.put = jest
      .fn()
      .mockResolvedValue({ data: 'Cart quantity updated successfully' });

    // Call the action
    await store.dispatch(updateCartQuantity(updateData));

    // Check the dispatched actions
    const actions = store.getActions();
    expect(actions[0].type).toEqual('cart/updateCartQuantity/pending');
    expect(actions[1].type).toEqual('cart/updateCartQuantity/fulfilled');
    expect(actions[1].payload).toEqual('Cart quantity updated successfully');
  });

  // You can add additional test cases for error scenarios if needed
});
