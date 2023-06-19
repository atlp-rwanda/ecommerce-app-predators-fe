import { Message } from "../../utils/chatDefinitions";

type Props = {
  message: Message,
}

const UserMessage = ({message}: Props) => {

  return (
    <div key={message.dateTime} className="w-3/5 bg-gray-300 rounded-t-lg rounded-bl-lg px-2 leading-tight place-self-end">
      <span className="text-sm leading-tight">
        {message.text}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-xs text-neutral-500">{message.src}</span>
        <span className="text-xs text-neutral-500">{message.dateTime}</span>
      </div>
    </div>
  );
};

export default UserMessage;
