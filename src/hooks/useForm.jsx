import { useState } from "react";

export const useForm = () => {
  const [errors, setErrors] = useState(null);
  const [details, setDetails] = useState(null);

  const onChange = (e) => {
    let { name, value, type } = e.target;
    if (type === "checkbox") {
      value = e.target.checked;
    }
    if (type === "radio") {
      value = e.target.value;
    }
    if (type === "datePicker") {
      let date = new Date(value);
      value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    if (type === "timePicker") {
      let date = new Date(value);
      value = date.getTime();
      // value = Date.parse(value) ;
      // value = `${date.getHours()}:${date.getMinutes()}`;
    }
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      image: e.target.files[0],
      imagePath: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const updateErrors = (errors) => {
    setErrors(errors);
  };

  const updateDetails = (details) => {
    setDetails(details);
  };

  const clearErrors = () => {
    setErrors(null);
  };

  const clearForm = () => {
    setErrors(null);
    setDetails(null);
  };
  return {
    details,
    setDetails,
    errors,
    setErrors,
    onChange,
    clearForm,
    updateErrors,
    updateDetails,
    clearErrors,
    handleImageChange,
  };
};
