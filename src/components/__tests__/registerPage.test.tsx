import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import RegisterPage from '../../pages/RegisterPage'; // Assuming this is the component you want to test.
import { Store, AnyAction } from 'redux';
// import { BrowserRouter } from 'react-router-dom';

// Create a mock store using redux-mock-store.
const mockStore = configureMockStore([]);

describe('RegisterPage', () => {
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    // Prepare any initial store state or mocked data here.
    // For example, set an initial state for your Redux store:
    const initialState = {
         user: {
      status: 'loading',
    },
    };
    store = mockStore(initialState);
  });

  test('should render RegisterPage component', async () => {
    // Use 'await act()' to wait for any asynchronous operations to complete before making assertions.

    // Wrap the rendering and awaiting of asynchronous operations inside 'act()'.
    await act(async () => {
      // Render the component within the Provider and with the mock store.
      render(
        <Provider store={store}>
          {/* <BrowserRouter>
            <RegisterPage />
          </BrowserRouter> */}
        </Provider>
      );
    });

    // Make assertions based on the rendered component.
//  const registerPage = screen.getByTestId('registerPage');
//  expect(registerPage).toBeInTheDocument();
//  expect(screen.getByTestId('registerPage')).toBeInTheDocument();
  });
});







// import { render,  } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import RegisterPage from '../../pages/RegisterPage';
// import configureMockStore from 'redux-mock-store';




// describe('RegisterPage', () => {
 
//   const mockStore = configureMockStore();
//   const store = mockStore({
//     user: {
//       status: 'loading',
//     },
//   });

//   // afterEach(cleanup);
//   test('should render RegisterPage component', () => {
//     render(
//       <Provider store={store}>
//           <RegisterPage />
//       </Provider>
//     );
//     // const registerPage = screen.getByTestId('registerPage');
//     // expect(registerPage).toBeInTheDocument();
//   });
// });
