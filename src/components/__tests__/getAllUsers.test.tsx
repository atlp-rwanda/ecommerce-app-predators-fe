import { AnyAction, ThunkMiddleware, configureStore } from '@reduxjs/toolkit';
import { getAllUsers } from '../action/disableAction';
import getAllUsersReducer from './getAllUsersSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

describe('getAllUsersSlice', () => {
  let store: ToolkitStore<{ getAllUsers: unknown; }, AnyAction, [ThunkMiddleware<{ getAllUsers: unknown; }, AnyAction>]>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        getAllUsers: getAllUsersReducer,
      },
    });
  });

  it('should handle getAllUsers.pending correctly', () => {
    store.dispatch(getAllUsers.pending());

    const state = store.getState().getAllUsers;

    expect(state.loading).toBe(true);
    expect(state.status).toBe('Loading...');
    expect(state.error).toBeNull();
  });

  it('should handle getAllUsers.fulfilled correctly', () => {
    const mockPayload = [{ id: 1, name: 'John' }];

    store.dispatch(getAllUsers.fulfilled(mockPayload));

    const state = store.getState().getAllUsers;

    expect(state.loading).toBe(false);
    expect(state.status).toBe('Success');
    expect(state.data).toEqual(mockPayload);
    expect(state.error).toBeNull();
  });

  it('should handle getAllUsers.rejected correctly', () => {
    store.dispatch(getAllUsers.rejected());

    const state = store.getState().getAllUsers;

    expect(state.loading).toBe(false);
    expect(state.status).toBe('Failed');
    expect(state.error).toBeNull();
  });
});
