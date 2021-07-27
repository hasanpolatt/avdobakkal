import BasketItem from './BasketItem';
import Modal from 'react-modal';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import ConfirmAlert from '../confirmAlert';

function Basket({ basket, total, resetBasket, products }) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <div className="basket-container container">
            <h3>Alışveriş Sepeti</h3>
            <li>
                {basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                ))}
            </li>
            <div className="total">
                Tutar: TL {total}
            </div>
            <button className="resetButton" onClick={resetBasket}>Sepeti sıfırla</button>
            <ConfirmAlert />
            <button className="menu" onClick={toggleModal}>Kaç</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">
                <button className="modal-close-btn" onClick={toggleModal}>
                    <GrClose />
                </button>
                <h3>Avdodan başarıyla kaçtın</h3>
            </Modal>

            

        </div>
    )
}

export default Basket;