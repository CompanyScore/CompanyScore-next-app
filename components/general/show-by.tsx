import React from "react";

export default function ShowBy() {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1">
        Show By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>5</li>
        <li>10</li>
        <li>15</li>
      </ul>
    </div>
  );
}
