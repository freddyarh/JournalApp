import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validar from "validator";

import { setError, removeError }  from '../../actions/ui';
import { startRegisterWithEmailPassWordName }  from '../../actions/auth';
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch( startRegisterWithEmailPassWordName(email, password, name) );
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch( setError("Name is required") );
      return false;
    } else if (!validar.isEmail(email)) {
      dispatch( setError("Email is not valid") );
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch( setError("Password should be at least 6 characteres and match each other") );
      return false;
    }
    dispatch( removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title"> Register </h3>{" "}
      <form onSubmit={handleRegister}>
        {
          msgError && (
            <div className="auth__alert-error">{msgError}</div>
          )
        }
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          name="name"
          value={name}
          className="auth__input"
          onChange={handleInputChange}
        />{" "}
        <input
          type="text"
          placeholder="Email"
          autoComplete="off"
          name="email"
          value={email}
          className="auth__input"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="auth__input"
          onChange={handleInputChange}
        />{" "}
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          className="auth__input"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-1">
          Register{" "}
        </button>
        <Link to="/auth/login" className="link mt-1">
          Already registered?
        </Link>
      </form>{" "}
    </>
  );
};
