import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchNotifications,
  markNotificationAsRead,
  deleteNotification,
  markAllNotificationsAsRead,
} from '../../redux/action/notificationActions';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  is_read: boolean;
}

const Notification = () => {
  // Dispatch and state initialization
  const dispatch = useDispatch();
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch notifications on component mount
    dispatch(fetchNotifications() as any);
  }, [dispatch]);

  // Selector to get notifications from Redux state
  const notifications = useSelector((state: { notification: { Notifications: { notifications: Notification[] } } }) => state.notification?.Notifications?.notifications);

  // Calculate the count of unread notifications
  const unreadCount = notifications?.filter((notification: Notification) => !notification.is_read).length;

 // Sort notifications to display unread ones first
const sortedNotifications = notifications
? [...notifications].sort((a, b) => {
    if (a.is_read && !b.is_read) return 1;
    if (!a.is_read && b.is_read) return -1;
    return 0;
  })
: null;

  // Mark notification as read
  const handleMarkAsRead = async (notificationId: number) => {
    try {
      dispatch(markNotificationAsRead(notificationId) as any);
      // Update the local state or trigger a new fetch of notification
      dispatch(fetchNotifications() as any);
    } catch (error) {
      console.log("Error marking notification as read:", error);
      // Handle error
    }
  };

  // Delete notification
  const handleDeleteNotification = async (notificationId: number) => {
    try {
      await dispatch(deleteNotification(notificationId) as any);
      // Handle successful deletion
      dispatch(fetchNotifications() as any);
    } catch (error) {
      console.log("Error deleting notification:", error);
      // Handle error
    }
  };

  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    try {
      await dispatch(markAllNotificationsAsRead() as any);
      // Handle successful marking of all notifications as read
      dispatch(fetchNotifications() as any);
    } catch (error) {
      console.log("Error marking all notifications as read:", error);
      // Handle error
    }
  };

  // Open notification pane
  const openNotificationPane = () => {
    setIsPaneOpen(true);
    setLoading(false);
  };

  // Close notification pane
  const closeNotificationPane = () => {
    setIsPaneOpen(false);
    setLoading(false);
  };

  return (
    <>
      <div className="cursor-pointer" onClick={openNotificationPane}>
        <i className="material-symbols-rounded cursor-pointer">notifications</i>
        {unreadCount && (
          <span className="notification-count">
            {unreadCount}
          </span>
        )}
      </div>

      <div className={`fixed transition-transform lg:max-w-[400px]  md:max-w-[400px] w-[80%] z-10 ease-in-out duration-500 shadow-md right-0 p-4 h-[100%] bg-white ${isPaneOpen ? 'block' : 'hidden'}`}>
        <div className="flex relative">
          <div
            className="text-red-600 cursor-pointer bg-red-300 rounded-[50%] w-[30px] h-[30px] text-center absolute left-[-40px] top-[-10px] flex flex-col justify-center"
            onClick={closeNotificationPane}
          >
            <i className='material-symbols-rounded cursor-pointer'>close</i>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="flex items-center mb-4">
          <span className="text-lg mr-2">Unread Notifications:</span>
          <span className="bg-blue-500 text-white rounded-full px-2 py-1">{unreadCount}</span>
        </div>
        <div className="flex flex-col gap-2  overflow-auto h-[80%]">
          {loading ? (
            'Loading...'
          ) : sortedNotifications && sortedNotifications.length > 0 ? (
            sortedNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b flex items-center ${notification.is_read ? 'bg-gray-100' : 'bg-white'}`}
              >
                <div className="mr-4">
                  <span className="text-lg">{notification.title}</span>
                  <p className="text-gray-500">{notification.message}</p>
                  <p className="text-sm text-gray-400">{notification.timestamp}</p>
                </div>
                <div className="ml-auto flex items-center">
                  {!notification.is_read && (
                    <button
                      className="mr-2 text-blue-500 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full"
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                     {"Mark as Read"}
                    </button>
                  )}
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteNotification(notification.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="border hover:bg-gray-200 hover:shadow-sm cursor-pointer rounded-md p-4 break-words">
              No notifications
            </div>
          )}
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleMarkAllAsRead}>
            Mark All as Read
          </button>
        </div>
      </div>
    </>
  );
};

export default Notification;
