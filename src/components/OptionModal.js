import React from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => 
     (
        <Modal
            isOpen={!!props.selectedOptions}
            contentLabel="Select Option"
            onRequestClose={props.handleDeleteselectedOptions}
            closeTimeout={200}
            className="modal"
        >
            <h3 className="modal__title">Mifla Mashood</h3>
            {props.selectedOptions && <p className="modal__body">{props.selectedOptions}</p>}
            <button className="button"
                onClick={props.handleDeleteselectedOptions}
            >Okay</button>
        </Modal>
        );


export default OptionModal;