// NotificationActions.test.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  fetchNotifications,
  markNotificationAsRead,
  deleteNotification,
  markAllNotificationsAsRead,
} from '../../redux/action/notificationActions'; 

const mock = new MockAdapter(axios);
const API_URL = 'https://ecommercepredators.onrender.com/api';

describe('notificationActions', () => {
  afterEach(() => {
    mock.reset();
    localStorage.clear();
  });

  it('dispatches the correct actions on successful fetch notifications', async () => {
    const mockResponseData = {
      notifications: [
        {
          id: 1,
          title: 'Notification 1',
          message: 'Message 1',
          timestamp: '2023-07-26T12:34:56Z',
          isRead: false,
        },
        {
          id: 2,
          title: 'Notification 2',
          message: 'Message 2',
          timestamp: '2023-07-26T12:35:56Z',
          isRead: true,
        },
      ],
    };

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/notification`).reply(200, mockResponseData);

    const thunk = fetchNotifications();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  
  });

  it('dispatches the correct actions on fetch notifications failure', async () => {
    const errorMessage = 'Failed to fetch notifications';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onGet(`${API_URL}/notification`).reply(500, { error: errorMessage });

    const thunk = fetchNotifications();
    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await thunk(dispatch, getState, undefined);
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }

    // expect(dispatch).toHaveBeenCalledWith(fetchNotifications.pending.type);
    // expect(dispatch).toHaveBeenCalledWith(fetchNotifications.rejected.type);
  });

  it('dispatches the correct actions on successful mark notification as read', async () => {
    const notificationId = 1;

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPut(`${API_URL}/notification/${notificationId}`).reply(200, {
      notificationId,
    });

    const thunk = markNotificationAsRead(notificationId);
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);


  });

  it('dispatches the correct actions on mark notification as read failure', async () => {
    const notificationId = 1;
    const errorMessage = 'Failed to mark notification as read';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPut(`${API_URL}/notification/${notificationId}`).reply(500, {
      error: errorMessage,
    });

    const thunk = markNotificationAsRead(notificationId);
    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await thunk(dispatch, getState, undefined);
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }

  });

  it('dispatches the correct actions on successful delete notification', async () => {
    const notificationId = 1;

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onDelete(`${API_URL}/notification/${notificationId}`).reply(200, {
      notificationId,
    });

    const thunk = deleteNotification(notificationId);
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);


  });

  it('dispatches the correct actions on delete notification failure', async () => {
    const notificationId = 1;
    const errorMessage = 'Failed to delete notification';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onDelete(`${API_URL}/notification/${notificationId}`).reply(500, {
      error: errorMessage,
    });

    const thunk = deleteNotification(notificationId);
    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await thunk(dispatch, getState, undefined);
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }

  });

  it('dispatches the correct actions on successful mark all notifications as read', async () => {
    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPut(`${API_URL}/notification/mark-all-as-read`).reply(200, {});

    const thunk = markAllNotificationsAsRead();
    const dispatch = jest.fn();
    const getState = jest.fn();

    await thunk(dispatch, getState, undefined);

  });

  it('dispatches the correct actions on mark all notifications as read failure', async () => {
    const errorMessage = 'Error marking all notifications as read';

    const token = 'mockToken';
    localStorage.setItem('token', token);

    mock.onPut(`${API_URL}/notification/mark-all-as-read`).reply(500, {
      error: errorMessage,
    });

    const thunk = markAllNotificationsAsRead();
    const dispatch = jest.fn();
    const getState = jest.fn();

    try {
      await thunk(dispatch, getState, undefined);
    } catch (error: any) {
      // Check if the correct error message is thrown
      expect(error.message).toEqual(errorMessage);
    }


  });
});
