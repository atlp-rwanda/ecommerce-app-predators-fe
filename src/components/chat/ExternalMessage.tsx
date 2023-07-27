import { Message } from '../../utils/chatDefinitions';

type Props = {
  message: Message;
};

const ExternalMessage = ({ message }: Props) => {
  console.log('Displaying incoming message...', message);
  return (
    <div
      key={message.dateTime}
      className="w-3/5 bg-gray-300 rounded-b-lg rounded-tr-lg px-2 leading-tight"
    >
      <span className="text-sm leading-tight">{message.text}</span>
      <div className="flex justify-between items-center">
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

export default ExternalMessage;
