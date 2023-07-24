import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { otpVerifyUser } from '../../redux/action/otpAction';
//Useditenerfaces

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface UserData {
  // Define the properties for user data here
}

interface UserState {
  data: UserData[];
  status: string;
  loading: boolean;
  error: string | null;
}

// Mock the react-toastify module to avoid actual toasts in testing
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// ... (other imports and setup remain the same)

// Define the interfaces for the test file
interface RootState {
  user: UserState;
}

type AppThunkDispatch = ThunkDispatch<RootState, undefined, any>;

describe('otpVerifyUser action', () => {
  it('dispatches the correct actions on successful OTP verification', async () => {
    // Mock the response data for the API call
    const mockData: UserData = {
      /* mocked data here */
    };
    axios.post = jest.fn().mockResolvedValue({ data: mockData });

    // Initialize mockstore with empty state
    const initialState: RootState = {
      user: {
        data: [],
        status: '',
        loading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);

    // Call the action and await the promise
    await (store.dispatch as AppThunkDispatch)(otpVerifyUser('123456'));

    // Check the dispatched actions and assertions
    // ... (remaining test code)
  });

  it('dispatches the correct actions on OTP verification failure', async () => {
    // Mock the error response for the API call
    const errorMessage = 'Verification failed';
    axios.post = jest.fn().mockRejectedValue(new Error(errorMessage));

    // Initialize mockstore with empty state
    const initialState: RootState = {
      user: {
        data: [],
        status: '',
        loading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);

    // Call the action and await the promise
    await (store.dispatch as AppThunkDispatch)(otpVerifyUser('123456'));

    // Check the dispatched actions and assertions
    // ... (remaining test code)
  });
});
