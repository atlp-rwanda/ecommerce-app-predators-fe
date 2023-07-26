import { useState } from 'react';
import { Message, User, UserEvent, socket } from './chatDefinitions';
import { useDispatch } from 'react-redux';
import { addCSMessage, addPublicMessage } from '../redux/reducers/chatSlice';

export default function useChatSender(activeRoom: User) {
  const [msgProcessing, setMsgProcessing] = useState(false);
  const dispatch = useDispatch();

  const sendMessage = (message: string | null): void => {
    if (message) {
      setMsgProcessing(true);
      const currentTime = new Date();
      const msg: Message = {
        text: message,
        src: 'user',
        dateTime: currentTime.toISOString(),
      };

      if (activeRoom === 'public') {
        socket.emit(UserEvent.GENERAL_MESSAGE, message);
        dispatch(addPublicMessage(msg));
      }

      if (activeRoom === 'customer_support') {
        socket.emit(UserEvent.ROOM_MESSAGE, activeRoom, message);
        dispatch(addCSMessage(msg));
      }

      setMsgProcessing(false);
      console.log('message sent:', msg);
    }
  };

  return { sendMessage, msgProcessing };
}
