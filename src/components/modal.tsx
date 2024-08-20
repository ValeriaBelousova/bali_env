import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { setModalVisible } from "../reducers/modal-reducer";
import { setHexData } from "../reducers/hex-reducer";

export const ModalResult = () => {
  const dispatch = useDispatch()

  const seeChanges = () => {
    dispatch(setModalVisible());
    dispatch(setHexData(1));
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Data was updated</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={seeChanges}>See changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}