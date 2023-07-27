/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen, fireEvent,cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from '../vendor/DeleteItem'; // Replace with the actual component name
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
afterEach(()=>{
    cleanup();
})
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserverMock;

const mockStore = configureStore([]);

test('clicking on the delete button opens the dialog', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <DeleteButton productId={1} reason={''} />
    </Provider>
  );

  const deleteButton = screen.getByText('delete');
  fireEvent.click(deleteButton);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
});

test('entering "delete" and submitting the form triggers the delete action', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <DeleteButton productId={1} reason={''} />
    </Provider>
  );

  const deleteButton = screen.getByText('delete');
  fireEvent.click(deleteButton);

  const input = screen.getByPlaceholderText('Type delete to confirm');
  userEvent.type(input, 'delete');

  const confirmButton = screen.getByText('confirm');
  fireEvent.click(confirmButton);
});
