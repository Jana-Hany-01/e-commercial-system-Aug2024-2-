import { useState } from "react";
const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  function validateUserName(userName) {
    if (!/^[a-zA-Z0-9_-]{4,10}$/.test(userName)) {
      console.log("in valid user name ");
      setErrors({
        ...errors,
        userName:
          " uppercase and lowercase letters , numbers , - and _   , length of [4,10] ",
      });
    } else {
      const { ["userName"]: _, ...res } = errors;
      setErrors(res);
    }
  }
  function ValidateEmail(email) {
    console.log(" in the validate email of our Custom Hook");
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      console.log(" the email is not correct ");
      setErrors({ ...errors, email: "in valid email syntax " });
    } else {
      let { ["email"]: _, ...res } = errors;
      setErrors(res);
    }
  }

  function validatePassword(pass) {
    console.log(" the password length", pass.length);

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`|]).{6,20}$/.test(
        pass
      )
    ) {
      console.log(" IN VALID PASSWORD !!");
      setErrors({
        ...errors,
        password: `must include: uppercase letter, lowercase letter, number, special character.  length of [6,25]`,
      });
    } else {
      console.log("  VALID PASSWORD !!");
      const { password: _, ...res } = errors;
      setErrors(res);
    }
  }

  function validateConfirmPassword(confirmPass, pass) {
    if (confirmPass !== pass) {
      setErrors({
        ...errors,
        confirmPassword: " password does not match !!",
      });
    } else {
      setErrors((prev) => {
        const { ["confirmPassword"]: _, ...rest } = prev;
        return rest;
      });
    }
  }

  return {
    validateUserName,
    ValidateEmail,
    validatePassword,
    validateConfirmPassword,
    errors,
  };
};
export default useFormValidation;
