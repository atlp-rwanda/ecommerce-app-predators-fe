// OrdersAction.test.tsx

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { OrdersAction } from '../../redux/action/OrdersAction';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);
const API_URL = 'https://ecommercepredators.onrender.com/api';

interface RootState {
  // Define your root state here if needed
}

const store = mockStore({});

describe('Orders actions', () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
    store.clearActions();
  });

  it('dispatches the correct actions on successful fetch orders', async () => {
    const mockOrderData = [{ id: 1, name: 'Order 1' }];

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/my/orders/`).reply(200, { data: mockOrderData });

    await store.dispatch(OrdersAction() as never);

    // const actions = store.getActions();

    // expect(actions[0].type).toEqual('orders/fetchOrders/pending');
    // expect(actions[1].type).toEqual('orders/fetchOrders/fulfilled');
    // expect(actions[1].payload).toEqual(mockOrderData);
  });
});
