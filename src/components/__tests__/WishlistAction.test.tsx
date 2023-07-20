import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {
  getWishlist,
  deleteFromWishlist,
  addToWishList,
} from '../../redux/action/WishlistAction';
import { AnyAction } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RootState {
  // Define your root state here if needed
}
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('wishlist actions', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({});
    mock.reset();
    localStorage.clear();
  });

  it('getWishlist should dispatch the correct actions on successful fetch', async () => {
    const mockWishlistData = [{ id: 1, name: 'Product 1' }];

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/wishlist`).reply(200, mockWishlistData);

    await store.dispatch(getWishlist() as never);

    const actions = store.getActions();

    expect(actions[0].type).toEqual('product/getWishlist/pending');
    expect(actions[1].type).toEqual('product/getWishlist/fulfilled');
    expect(actions[1].payload).toEqual(mockWishlistData);
  });

  it('deleteFromWishlist should dispatch the correct actions on successful delete', async () => {
    const productId = 1;

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onDelete(`${API_URL}/wishlist/${productId}`).reply(200, { success: true });

    await store.dispatch(deleteFromWishlist(productId) as never);

    const actions = store.getActions();

    expect(actions[0].type).toEqual('product/deletefromwishlist/pending');
    expect(actions[1].type).toEqual('product/deletefromwishlist/fulfilled');
  });

  it('addToWishList should dispatch the correct actions on successful add', async () => {
    const productId = 1;

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPost(`${API_URL}/wishlist`).reply(200, { success: true });

    await store.dispatch(addToWishList(productId) as never);

    const actions = store.getActions();

    expect(actions[0].type).toEqual('product/addToWishlist/pending');
    expect(actions[1].type).toEqual('product/addToWishlist/fulfilled');
  });
});
