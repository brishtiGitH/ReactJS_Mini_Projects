import "./modal.css";
export const Modal = ({ heading, body, footer, onClose }) => {
  return (
    <div className="modal-container">
      <h2 className="modalHeading">
        <span onClick={onClose}>&times;</span>
        {heading ? heading : "Modal Heading"}
      </h2>
      <h4 className="modalBody">{body ? body : "Modal Body"}</h4>
      <h2 className="modalFooter">{footer ? footer : "Modal Footer"}</h2>
    </div>
  );
};
