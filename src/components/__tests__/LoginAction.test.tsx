/* eslint-disable @typescript-eslint/no-empty-interface */
import { login } from '../../redux/action/authAction';
import authService from '../../services/authService';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
interface RootState {
    // Define your root state here if needed
  }

const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);

jest.mock('../../services/authService');

describe('login action', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({});
    jest.clearAllMocks();
  });

  it('should dispatch the correct actions on successful login', async () => {
    const mockCredentials = {
      email: 'test@example.com',
      password: 'password',
    };

    const mockResponse = {
      token: 'mockToken',
      user: {
        id: 1,
        name: 'John Doe',
        email: 'test@example.com',
      },
    };

    (authService.login as jest.Mock).mockResolvedValue(mockResponse);

    await store.dispatch(login(mockCredentials) as never);

    const actions = store.getActions();

    expect(actions[0].type).toEqual('auth/login/pending');
    expect(actions[1].type).toEqual('auth/login/fulfilled');
    expect(actions[1].payload).toEqual(mockResponse);
  });

  it('should dispatch the correct actions on login failure', async () => {
    const mockCredentials = {
      email: 'test@example.com',
      password: 'password',
    };

    const errorMessage = 'Rejected';

    (authService.login as jest.Mock).mockRejectedValue({
      response: {
        data: {
          message: errorMessage,
        },
      },
    });

    await store.dispatch(login(mockCredentials) as never);

    const actions = store.getActions();

    expect(actions[0].type).toEqual('auth/login/pending');
    expect(actions[1].type).toEqual('auth/login/rejected');
    expect(actions[1].error?.message).toEqual(errorMessage);
  });
});
