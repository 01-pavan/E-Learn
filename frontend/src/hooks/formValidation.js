import { useState } from "react";
import { omit } from "lodash";

const FormValidate = (callback) => {
  console.log("executed");
  const [formData, setFormData] = useState({});
  //ERRORS
  const [errors, setErrors] = useState({});

  const validate = (e, name, value) => {
    switch (name) {
      case "email":
        if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(value)) {
          setErrors({
            ...errors,
            email: "enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

      case "username":
        if (!new RegExp(/^[a-zA-Z0-9]+$/).test(value)) {
          setErrors({
            ...errors,
            username: "username not valid",
          });
        } else {
          let newObj = omit(errors, "username");
          setErrors(newObj);
        }
        break;
      case "name":
        if (value.length <= 4) {
          // we will set the error state
          setErrors({
            ...errors,
            name: "name atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "name");
          setErrors(newObj);
        }
        break;
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      let name = e.target.name;
      let val = e.target.value;

      validate(e, name, val);
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  const handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(formData).length !== 0
    ) {
      //calling after validation
      callback();
    } else {
      alert("Please enter all details");
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};

export default FormValidate;
