// ProductAction.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  fetchProducts,
  fetchProductsCollection,

  addProduct,
  fetchProductById,
} from '../../redux/action/ProductAction'; 

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

interface RootState {
  // Define your root state here if needed
}

describe('Product actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('dispatches the correct actions on successful fetch products', async () => {
    const mockResponseData = [{ id: 1, name: 'Product 1' }];

    mock.onGet(`${API_URL}/Product`).reply(200, mockResponseData);

    const store = mockStore({}); // Create a mock store
    await store.dispatch(fetchProducts() as any); // Dispatch the fetchProducts action

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProducts.pending.type);
    expect(actions[1].type).toEqual(fetchProducts.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponseData);
  });

  it('dispatches the correct actions on fetch products failure', async () => {
    const errorMessage = 'An error occurred while fetching products.';

    mock.onGet(`${API_URL}/Product`).reply(500, { error: errorMessage });

    const store = mockStore({}); // Create a mock store
    try {
      await store.dispatch(fetchProducts() as any); // Dispatch the fetchProducts action
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProducts.pending.type);
    expect(actions[1].type).toEqual(fetchProducts.rejected.type);
  });

  it('dispatches the correct actions on successful fetch products collection', async () => {
    const mockResponseData = { products: [{ id: 1, name: 'Product 1' }] };
    const token = 'mockToken';

    mock.onPost(`${API_URL}/vendor/collection`).reply(200, mockResponseData);

    localStorage.setItem('token', token);

    const store = mockStore({}); 
    await store.dispatch(fetchProductsCollection() as any); 

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProductsCollection.pending.type);
    expect(actions[1].type).toEqual(fetchProductsCollection.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponseData);
  });

  it('dispatches the correct actions on fetch products collection failure', async () => {
    const errorMessage = 'An error occurred while fetching products collection.';
    const token = 'mockToken';

    mock.onPost(`${API_URL}/vendor/collection`).reply(500, { error: errorMessage });

    localStorage.setItem('token', token);

    const store = mockStore({}); 
    try {
      await store.dispatch(fetchProductsCollection() as any);
    } catch (error: any) {
     
      expect(error.message).toEqual(errorMessage);
    }

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProductsCollection.pending.type);
    expect(actions[1].type).toEqual(fetchProductsCollection.rejected.type);
  });

  it('dispatches the correct actions on successful product removal', async () => {
    const productId = 1;
    const mockResponseData = { productId };

    const token = 'mockToken';

    mock.onDelete(`${API_URL}/product/${productId}`).reply(200, mockResponseData);

    localStorage.setItem('token', token);

  });

  it('dispatches the correct actions on product removal failure', async () => {
    const productId = 1;
    const errorMessage = 'An error occurred while removing the product.';
    const token = 'mockToken';

    mock.onDelete(`${API_URL}/product/${productId}`).reply(500, { error: errorMessage });

    localStorage.setItem('token', token);

  
  
  });

  it('dispatches the correct actions on successful product addition', async () => {
    const product = { name: 'New Product', description: 'New Description', price: 19.99 };
    const mockResponseData = { id: 1, ...product };

    const token = 'mockToken';

    mock.onPost(`${API_URL}/product`).reply(200, mockResponseData);

    localStorage.setItem('token', token);

    const store = mockStore({}); // Create a mock store
    await store.dispatch(addProduct(product) as any); // Dispatch the addProduct action

    const actions = store.getActions();
    expect(actions[0].type).toEqual(addProduct.pending.type);
    expect(actions[1].type).toEqual(addProduct.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponseData);
  });

  it('dispatches the correct actions on product addition failure', async () => {
    const product = { name: 'New Product', description: 'New Description', price: 19.99 };
    const errorMessage = 'An error occurred while adding the product.';
    const token = 'mockToken';

    mock.onPost(`${API_URL}/product`).reply(500, { error: errorMessage });

    localStorage.setItem('token', token);

    const store = mockStore({}); // Create a mock store
    try {
      await store.dispatch(addProduct(product) as any); // Dispatch the addProduct action
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }

    const actions = store.getActions();
    expect(actions[0].type).toEqual(addProduct.pending.type);
    expect(actions[1].type).toEqual(addProduct.rejected.type);
  });

  it('dispatches the correct actions on successful fetch product by ID', async () => {
    const productId = 1;
    const mockResponseData = { id: productId, name: 'Product 1' };
    const token = 'mockToken';

    mock.onGet(`${API_URL}/product/${productId}`).reply(200, mockResponseData);

    localStorage.setItem('token', token);

    const store = mockStore({}); 
    await store.dispatch(fetchProductById(productId) as any); 

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProductById.pending.type);
    expect(actions[1].type).toEqual(fetchProductById.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponseData);
  });

  it('dispatches the correct actions on fetch product by ID failure', async () => {
    const productId = 1;
    const errorMessage = 'An error occurred while fetching the product by ID.';
    const token = 'mockToken';

    mock.onGet(`${API_URL}/product/${productId}`).reply(500, { error: errorMessage });

    localStorage.setItem('token', token);

    const store = mockStore({}); 
    try {
      await store.dispatch(fetchProductById(productId) as any); 
    } catch (error: any) {
      // 
      expect(error.message).toEqual(errorMessage);
    }

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchProductById.pending.type);
    expect(actions[1].type).toEqual(fetchProductById.rejected.type);
  });
});
