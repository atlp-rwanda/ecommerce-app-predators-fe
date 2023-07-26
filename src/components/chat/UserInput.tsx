import React, { useRef, useState } from 'react';
import { User } from '../../utils/chatDefinitions';
import useChatSender from '../../utils/useChatSender';

interface Props {
  activeRoom: User;
}

const UserInput = ({ activeRoom }: Props) => {
  const { sendMessage, msgProcessing } = useChatSender(activeRoom);
  const [msg, setMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (msg) {
      sendMessage(msg);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      return;
    }
    console.log(`Message cannot be empty`);
  };

  const disable = Boolean(msg);
  console.log('can_send_message', disable);
  return (
    <form
      className="h-10 px-2.5 flex items-center justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="message"
        placeholder="Type a message"
        autoComplete="off"
        onChange={(e: any) => setMsg(e.target.value)}
        ref={inputRef}
        className="flex-1 h-full bg-gray-100 text-gray-700 px-2 py-1 ring-1 ring-blue-500 outline-1 outline-blue-500 rounded-l"
      />
      <button
        type="submit"
        disabled={msgProcessing || !disable}
        className="h-full bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-r ring-1 ring-blue-500 font-bold"
      >
        {msgProcessing ? 'Sending..' : 'SEND'}
      </button>
    </form>
  );
};

export default UserInput;
