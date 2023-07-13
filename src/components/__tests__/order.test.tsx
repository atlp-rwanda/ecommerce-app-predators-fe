
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 

import Orders from '../../pages/buyer/Orders'; 
import { Store } from 'redux';

// Define the type for the Redux store state
interface AppState {
  orders: {
    data: {
      order: {
        id: number;
        data: {
          data: any;
          message: string;
        };
        products_info: {
          id: number;
          name: string;
          quantity: number;
          subtotal: number;
        }[];
        billing_info: {
          country: string;
          street_address: string;
          town: string;
          state: string;
          email: string;
          post_code: string;
        };
        createdAt: string;
        total: number;
        status: string;
      }[];
    };
    status: string;
  };
}

// Create a mock Redux store
const mockStore = configureStore<AppState>([]);

describe('Orders component', () => {
  let store: Store<AppState>;

  beforeEach(() => {
    // Create a mock store with initial state
    store = mockStore({
      orders: {
        data: {
          order: [
            {
              id: 1,
              data: {
                data: null,
                message: 'Order fetched successfully',
              },
              products_info: [
                {
                  id: 1,
                  name: 'Product 1',
                  quantity: 2,
                  subtotal: 20,
                },
              ],
              billing_info: {
                country: 'Country 1',
                street_address: 'Street 1',
                town: 'Town 1',
                state: 'State 1',
                email: 'email@example.com',
                post_code: '12345',
              },
              createdAt: '2023-07-18',
              total: 40,
              status: 'pending',
            },
          ],
        },
        status: 'loaded',
      },
    });
  });

  it('renders the component with order details', () => {
    render(
      <Provider store={store}>
        <Orders />
      </Provider>
    );

    expect(screen.getByText('# 1')).toBeVisible();
    expect(screen.getByText('1 items')).toBeVisible();
    expect(screen.getByText('40')).toBeVisible();
    expect(screen.getByText('a few seconds ago')).toBeVisible();
  });

  it('displays the order details modal when "View details" is clicked', async () => {
    render(
      <Provider store={store}>
        <Orders />
      </Provider>
    );

    const viewDetailsButton = screen.getByText('View details');
    fireEvent.click(viewDetailsButton);
    await waitFor(() => {
      expect(screen.getByText('Order # 1')).toBeVisible();
    });
  });

  it('closes the order details modal when "Close" button is clicked', async () => {
    render(
      <Provider store={store}>
        <Orders />
      </Provider>
    );

    const viewDetailsButton = screen.getByText('View details');
    fireEvent.click(viewDetailsButton);

    await waitFor(() => {
      expect(screen.getByText('Order # 1')).toBeVisible();
    });

    const closeModalButton = screen.getByText('Close');
    fireEvent.click(closeModalButton);

    await waitFor(() => {
      expect(screen.queryByText('Order # 1')).not.toBeInTheDocument();
    });
  });
});
