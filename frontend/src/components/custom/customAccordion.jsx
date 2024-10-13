/* eslint-disable react/prop-types */
import  { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./customAccordion.scss";

const CustomAccordion = ({ index, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-customAccordion">
      <div className={`accordion ${isOpen ? "active" : ""}`}>
        <div
          className={`accordion-header ${isOpen ? "active" : ""}`}
          onClick={toggleAccordion}
        >
          <div className="left-side">
            <p>{index}</p>
            <p>{title}</p>
          </div>
          <span
            className={`material-symbols-outlined ${isOpen ? "active" : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div
          className="accordion-content"
          style={{ height: `${contentHeight}px` }}
          ref={contentRef}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
