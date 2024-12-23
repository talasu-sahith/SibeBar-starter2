import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (
    <div
      className={isModalOpen ? `modal-overlay show-overlay` : `modal-overlay`}
    >
      <div className="modal-container">
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </div>
  );
};

export default Modal;
