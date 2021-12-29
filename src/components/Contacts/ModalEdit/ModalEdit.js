import { createPortal } from 'react-dom';
import s from './ModalEdit.module.scss';

const modalRoot = document.getElementById('modal-root');

function ModalEdit() {
  return createPortal(
    <div className={s.Overlay} onClick={this.handleOverlayClick}>
      <div className={s.Modal}></div>
    </div>,
    modalRoot,
  );
}

export default ModalEdit;
