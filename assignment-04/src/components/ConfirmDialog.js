import React from "react";

function ConfirmDialog({ onConfirm, onCancel }) {
    return (
        <div>
            <p>Are you sure you want to view the details?</p>
            <button onClick={onConfirm}>OK</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default ConfirmDialog;