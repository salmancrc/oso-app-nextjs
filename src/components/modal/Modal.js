import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.48)',
        transition: 'background-color 0.3s ease-in-out',
        zIndex: '60'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: '16px',
        padding: '24px',
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.3s ease-in-out'
    }
};

function ModalComponent({ modalIsOpen, modalIsShare, closeModal, children }) {
    let subtitle;

    function afterOpenModal() {
        if (subtitle) {
            subtitle.style.color = '#f00';
        }
    }

    return (
        <div>
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {children}
                </Modal>
            )}

            {modalIsShare && (
                <Modal
                    isOpen={modalIsShare}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {children}
                </Modal>
            )}
        </div>
    );
}

export default ModalComponent;