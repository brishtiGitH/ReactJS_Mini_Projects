import { useState } from "react";
import { Modal } from "./Modal";

export default function ModalTest() {
  const [showModal, setShowModal] = useState(false);
  function onClose() {
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      {showModal ? <Modal heading="Props Heading" onClose={onClose} /> : null}
    </div>
  );
}
