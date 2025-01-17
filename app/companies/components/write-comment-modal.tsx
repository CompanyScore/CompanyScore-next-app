import React from "react";

export function WriteCommentModal() {
  return (
    <div>
      <input
        type="checkbox"
        id="modal_write_comment"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box flex justify-around w-full">
          write comment
        </div>
        <label className="modal-backdrop" htmlFor="modal_write_comment">
          Close
        </label>
      </div>
    </div>
  );
}
