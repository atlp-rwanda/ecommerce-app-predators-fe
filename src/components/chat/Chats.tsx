import { Message, User } from '../../utils/chatDefinitions';
import { useSelector } from 'react-redux';
import {
  selectPublicMessages,
  selectCsMessages,
} from '../../redux/reducers/chatSlice';
import ExternalMessage from './ExternalMessage';
import UserMessage from './UserMessage';

interface Props {
  activeRoom: User;
}

const PUBLIC_SPACE: User = 'public';
const CUSTOMER_SUPPORT: User = 'customer_support';

const Chats = ({ activeRoom }: Props) => {
  const publicMessages: Message[] = useSelector(selectPublicMessages);
  const csMessages: Message[] = useSelector(selectCsMessages);

  function displayMessages(messages: Message[]) {
    return messages.map((message: Message) => (
      <>
        {message.src === 'user' ? (
          <UserMessage key={message.dateTime} message={message} />
        ) : (
          <ExternalMessage key={message.dateTime} message={message} />
        )}
      </>
    ));
  }

  return (
    <div className="grow flex flex-col justify-end p-3 gap-3 overflow-auto">
      {activeRoom === PUBLIC_SPACE && displayMessages(publicMessages)}
      {activeRoom === CUSTOMER_SUPPORT && displayMessages(csMessages)}
    </div>
  );
};

export default Chats;
