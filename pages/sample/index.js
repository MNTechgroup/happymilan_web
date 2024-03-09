import React, { useState, useEffect } from 'react';

function ModalWithScrollLock() {
  const [showModal, setShowModal] = useState(false);

  // Lock the body scroll when the modal is shown
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore the original overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>Modal with Scroll Lock Example</h1>
      <button onClick={toggleModal}>Toggle Modal</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Modal Title</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
            <div className="modal-content">
              <p>This is the modal content.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalWithScrollLock;
