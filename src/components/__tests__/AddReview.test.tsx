/* eslint-disable @typescript-eslint/no-empty-interface */
import MockAdapter from 'axios-mock-adapter';
import { addReview } from '../../redux/action/reviewAction';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import API_URL from '../../utils/axios';

const middlewares = [thunk];
const mock = new MockAdapter(API_URL);
interface RootState {
    // Define your root state here if needed
}

describe('addReview', () => {
    let store: MockStoreEnhanced<RootState, ThunkDispatch<RootState, undefined, AnyAction>>;

    beforeEach(() => {
        const mockStore = configureStore<RootState, ThunkDispatch<RootState, undefined, AnyAction>>(middlewares);
        store = mockStore({});
    });

    afterEach(() => {
        mock.reset();
    });

    it('dispatches the correct actions on failure adding review', async () => {
        const product_id = 1;
        const ReviewData = {
            "product_id": product_id,
            "rating": 3,
            "feedback": "I appreciate your service"
        };
        const errorMessage = 'Rejected';

        mock.onPost(`${API_URL}review/${product_id}`, ReviewData).reply(500, errorMessage);

        await store.dispatch(addReview(ReviewData));

        const actions = store.getActions();

        expect(actions[0].type).toEqual('review/pending'); // Expect the pending action
        expect(actions[1].type).toEqual('review/rejected'); // Expect the rejected action
        expect(actions[1].error?.message).toEqual(errorMessage);
    });
});
