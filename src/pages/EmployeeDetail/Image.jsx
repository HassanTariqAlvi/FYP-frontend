import React from "react";
import employee_image from "assets/Images/employee.png";

const Image = ({ image }) => {
  return (
    <img
      src={image ? image : employee_image}
      alt="Employee_image"
      style={{ border: "1px solid grey", height: "170px", padding: "2px" }}
    />
  );
};

export default Image;
