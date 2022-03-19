import React from "react";
import "./styles.scss";
interface IBUTTON {
 label: string;
 customButtonClass: string;
 onClickFunc?: () => void;
}
export default function Button({
 label,
 customButtonClass,
 onClickFunc,
}: IBUTTON) {
 return (
  <button
   className={`btn btn-primary ${customButtonClass}`}
   onClick={onClickFunc}
  >
   {label}
  </button>
 );
}
