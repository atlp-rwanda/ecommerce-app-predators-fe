import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { disableAccount } from '../../redux/action/disableAction';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);
const API_URL = 'https://ecommercepredators.onrender.com/api';

interface RootState {
    // Define your root state here if needed
}

describe('disableAccount action', () => {
    let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;

    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        mock.reset();
        localStorage.clear();
    });

    it('dispatches the correct actions on successful account disable', async () => {
        const userData = {
            id: 1,
            status: 'disabled',
            reason: 'Account suspended',
        };

        const token = 'mockToken';
        localStorage.setItem('token', token);

        mock.onPost(`${API_URL}/disableUser/${userData.id}`).reply(200, { success: true });

        await store.dispatch(disableAccount(userData) as never);

        const actions = store.getActions();

        expect(actions[0].type).toEqual('user/disableAccount/pending');
        expect(actions[1].type).toEqual('user/disableAccount/fulfilled');
        expect(actions[1].payload).toEqual({ success: true });
    });

    it('dispatches the correct actions on account disable failure', async () => {
        const userData = {
            id: 1,
            status: 'disabled',
            reason: 'Account suspended',
        };

        const token = 'mockToken';
        localStorage.setItem('token', token);

        const errorMessage = 'Error disabling account';

        mock.onPost(`${API_URL}/disableUser/${userData.id}`).reply(500, { error: errorMessage });

        try {
            await store.dispatch(disableAccount(userData) as never);
        } catch (error: any) {
            // Check if the correct error message is thrown
            expect(error.message).toEqual(errorMessage);
        }

        const actions = store.getActions();

        expect(actions[0].type).toEqual('user/disableAccount/pending');
        expect(actions[1].type).toEqual('user/disableAccount/rejected');
    });
});
