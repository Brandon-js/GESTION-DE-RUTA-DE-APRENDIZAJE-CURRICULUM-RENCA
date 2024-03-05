import React from 'react';
import './Modal.css'; // Estilos del modal

function Modal({ isOpen, onClose, children }) {
  const modalStyle = {
    display: isOpen ? 'block' : 'none'
  };

  // Manejar el cierre del modal
  const handleClose = () => {
    onClose();
  };

  // Evitar que el clic en el modal lo cierre
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" style={modalStyle} onClick={handleClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
