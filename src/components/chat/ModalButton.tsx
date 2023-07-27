import { useState } from 'react';
import ChatModal from './ChatModal';
import chatPicture from '../../assets/images/chat.png';

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-white opacity-75 rounded-e-full rounded-t-full rounded-l-full fixed bottom-10 right-10 w-10 h-10"
      >
        <img
          src={chatPicture}
          className="drop-shadow-2xl  shadow-2xl"
          alt="chat button"
        />
      </button>
      {isModalOpen && <ChatModal closeModal={closeModal} />}
    </>
  );
};

export default ModalButton;
