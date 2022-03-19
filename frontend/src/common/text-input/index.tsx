import React from "react";
import "./styles.scss";
interface ITEXTINPUT {
 label: string;
 fieldName: string;
 inputType: string;
 fieldId: string;
 placeholder: string;
 customeClass?: string;
 onChangeFunc: () => void;
}
export default function TextInput({
 label,
 fieldName,
 inputType,
 fieldId,
 placeholder,
 customeClass,
 onChangeFunc,
}: ITEXTINPUT) {
 return (
  <div>
   <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
     {label}
    </label>
    <input
     type={inputType}
     className={`form-control${" "}${customeClass}`}
     id={fieldId}
     placeholder={placeholder}
     name={fieldName}
     onChange={onChangeFunc}
    />
   </div>
  </div>
 );
}
