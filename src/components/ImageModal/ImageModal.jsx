import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: { backgroundColor: "rgba(0,0,0,0.6)" },
};
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, modalUrl, modalAlt }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={modalUrl} alt={modalAlt} />
    </Modal>
  );
};

export default ImageModal;
