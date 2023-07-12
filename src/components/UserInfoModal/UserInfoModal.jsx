import ReactDOM from 'react-dom';
import { Backdrop, Modal, Text, Btn, CloseModal} from 'components/LogoutModal/LogoutModal.styled';
import { useCallback, useEffect } from 'react';
const modalRoot = document.getElementById('modal-root');


export const UserInfoModal = ({ editIsOpen, setEditIsOpen }) => {
    const onCloseClick = useCallback(() => {
    document.body.classList.remove('modal-open');
    setEditIsOpen(false);
    }, [setEditIsOpen]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
            onCloseClick()
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, [onCloseClick])

   
    

    return ReactDOM.createPortal(
        <Backdrop className={editIsOpen ? 'open' : ' '} onClick={()=> onCloseClick()}>
            <Modal onClick={e => { e.stopPropagation(); }}>
                <CloseModal onClick={()=> onCloseClick()}/>
                <Text>Are you sure you want to log out?</Text>
                <Btn>Save changes</Btn>
            </Modal>
        </Backdrop>
        ,
        modalRoot
    )
}
