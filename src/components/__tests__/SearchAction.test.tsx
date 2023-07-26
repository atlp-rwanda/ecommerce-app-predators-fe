import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { searchProductsByFilter } from '../../redux/action/SearchAction';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);
const API_URL = 'https://ecommercepredators.onrender.com/api';

interface RootState {
  loading: boolean;
  products: any[]; // Change the type to match your products data structure
  error: string | null;
}

describe('searchProductsByFilter async action', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch products and update the state on successful request', async () => {
    const fakeProducts = [
      { id: '1', name: 'Product 1' },
      { id: '2', name: 'Product 2' },
    ];

    mock.onGet(`${API_URL}/products/search`).reply(200, fakeProducts);

    const store = mockStore({ loading: false, products: [], error: null });

    await store.dispatch(searchProductsByFilter({ name: 'test', price: '10', keyword: 'keyword' }));

    const actions = store.getActions();
    expect(actions[0].type).toBe(searchProductsByFilter.pending.type);

  });
});
