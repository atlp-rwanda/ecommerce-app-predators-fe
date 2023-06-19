import { useState } from 'react';
import ChatModal from './ChatModal';


const ModalButton = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className="fixed bottom-10 right-10 w-10 h-10">
          <img src="https://th.bing.com/th/id/OIP.gcMfpgC3Pp7wi5dA1pNznQHaHa?pid=ImgDet&rs=1" className='rounded-full drop-shadow-2xl shadow-2xl' alt="chat button" />
      </button>
      {isModalOpen && <ChatModal closeModal={closeModal} />}
    </>
  );
};

export default ModalButton;
