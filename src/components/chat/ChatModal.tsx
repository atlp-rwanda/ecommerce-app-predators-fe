import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Message, User, UserEvent, socket } from '../../utils/chatDefinitions';
import Chats from './Chats';
import UserInput from './UserInput';
import { addCSMessage, addPublicMessage } from '../../redux/reducers/chatSlice';

interface Props {
  closeModal: () => void;
}

const PUBLIC_SPACE: User = 'public';
const CUSTOMER_SUPPORT: User = 'customer_support';

const ChatModal = ({ closeModal }: Props) => {
  const [activeRoom, setActiveRoom] = useState<User>(PUBLIC_SPACE);
  const dispatch = useDispatch();

  // console.log(activeRoom);

  const joinPublic = () => setActiveRoom(PUBLIC_SPACE);
  const joinRoom = () => setActiveRoom(CUSTOMER_SUPPORT);

  useEffect(() => {
    socket.connect();
    console.count('Connected to chat server.');

    socket.on('connect_error', () => {
      setTimeout(() => {
        console.log('connection refused.');
      }, 1000);
    });

    function onSuccessfulConnection(server_msg: string) {
      const cs: User = 'customer_support';
      socket.emit('join', cs);
      console.log(server_msg, '& accessing CUSTOMER SUPPORT');
    }

    function onGeneralMessage(message: Message) {
      console.log('PUBLIC:', message);
      dispatch(addPublicMessage(message));
    }

    function onTargetedMessage(room: string, message: Message) {
      console.log(room, message);
      dispatch(addCSMessage(message));
    }

    function onJoinedNotification(
      feedback: string,
      entity: string,
      chatHistory: any[]
    ) {
      console.log(feedback);
      console.log(entity);
      console.log(chatHistory);
    }

    socket.on(UserEvent.SUCCESSFULL_CONNECTION, onSuccessfulConnection);
    socket.on(UserEvent.GENERAL_MESSAGE, onGeneralMessage);
    socket.on(UserEvent.TARGETED_MESSAGE, onTargetedMessage);
    socket.on(UserEvent.JOINED_NOTIFICATION, onJoinedNotification);

    return () => {
      socket.disconnect();
      socket.off(UserEvent.SUCCESSFULL_CONNECTION);
      socket.off(UserEvent.GENERAL_MESSAGE);
      socket.off(UserEvent.TARGETED_MESSAGE);
      socket.off(UserEvent.JOINED_NOTIFICATION);
      console.count('Disconnecting to chat server.');
    };
  }, []);

  return (
    <>
      {/* Dark background */}
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-75"></div>
      {/* Pop up form */}
      <div className="fixed inset-0 flex items-center justify-center z-1000">
        <div className="h-4/5  lg:w-2/6 w-4/5 pb-2.5 flex flex-col bg-white rounded-xl shadow-lg">
          {/* Close */}
          <div className="flex justify-end h-8 bg-black bg-opacity-5 ">
            <button
              className="order-last h-full w-fit hover:bg-red w-1/7 text-white self-end align-self-end justify-self-end"
              onClick={closeModal}
            >
              <svg
                width="69"
                height="30"
                viewBox="0 0 69 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.896 27.6L59.2 54H38.08L30.784 40.464L20.704 54H0.16L22.912 26.064L8.896 0.143995H30.016L37.312 13.68L47.488 0.143995H68.128L44.896 27.6Z"
                  fill="#EDA415"
                />
              </svg>
            </button>
          </div>
          {/* Navbar */}
          <div className=" h-10 flex">
            <button
              onClick={() => joinPublic()}
              className={`flex-1  ${
                activeRoom === PUBLIC_SPACE
                  ? 'bg-yellow-500 text-white'
                  : 'text-blue-600 bg-slate-300'
              } text-slate-50 capitalize font-bold text-2xl leading-12`}
            >
              public
            </button>
            <button
              onClick={() => joinRoom()}
              className={`flex-1  ${
                activeRoom === CUSTOMER_SUPPORT
                  ? 'bg-yellow-500 text-white '
                  : 'text-blue-600 bg-slate-300 '
              } text-slate-50 capitalize font-bold text-2x1 leading-12`}
            >
              customer support
            </button>
          </div>
          {/* Messages section */}
          <Chats activeRoom={activeRoom} />
          {/* Input */}
          <UserInput activeRoom={activeRoom} />
        </div>
      </div>
    </>
  );
};

export default ChatModal;
