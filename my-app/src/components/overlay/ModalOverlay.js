// components/modal/ModalOverlay.jsx
import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import InternshipModal from "../modal/InternshipModal";

const ModalOverlay = forwardRef(({ onSubmitInternshipRequest }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }), []);

  return open
    ? ReactDOM.createPortal(
        <InternshipModal
          onClose={() => setOpen(false)}
          onSubmitInternshipRequest={onSubmitInternshipRequest}
        />,
        document.getElementById("modal-overlay")
      )
    : null;
});

export default ModalOverlay;
