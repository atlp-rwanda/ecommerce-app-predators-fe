import { Message } from '../../utils/chatDefinitions';

type Props = {
  message: Message;
};

const UserMessage = ({ message }: Props) => {
  return (
    <div
      key={message.dateTime}
      className="w-3/5 flex flex-col bg-indigo-300 rounded-t-lg rounded-bl-lg px-2 leading-tight place-self-end"
    >
      <span className="text-sm break-words leading-tight">{message.text}</span>
      <div className="flex lg:justify-between lg:items-center">
        <span className="text-xs text-neutral-500 basis-1/3">
          {message.src}
        </span>
        <span className="text-xs text-neutral-500 basis-2/3">
          {message.dateTime}
        </span>
      </div>
    </div>
  );
};

export default UserMessage;
