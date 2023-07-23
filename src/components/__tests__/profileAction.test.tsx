import { getProfile } from '../../redux/action/profileAction';
import store from '../../redux/store/Store';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { profile } from '../../mocks/responses/profile';

export const handlers = [
  rest.get(
    'https://ecommercepredators.onrender.com/api/profile',
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(profile), ctx.delay(150));
    }
  ),
];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Profile redux state test', () => {
  it('Should be able to get profile details of a user', async () => {
    const data = await store.dispatch(getProfile() as any);
    expect(data.type).toBe('user/profile/fulfilled');
    expect(data.payload).toEqual(profile);

    const state = store.getState().updateProfile.data;

    console.log(state);
    expect(state).toEqual(profile);
  });
});
