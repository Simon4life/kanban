import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { SmallLoading } from "../components/Loading";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const { user, loginUser, registerUser, isLoading, errorMessage } =
    useUserContext();

  const [formValues, setFormValues] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  const toggleMember = () => {
    setFormValues({ ...formValues, isMember: !formValues.isMember });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = formValues;

    if (isMember) {
      if (!email || !password) {
        console.log("please fill out form correctly");
        return;
      } else {
        loginUser({ email, password });
      }
    } else {
      if (!email || !name || !password) return;

      registerUser({ name, email, password });
    }
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{formValues.isMember ? "Login" : "Register"}</h2>
        {/* Name form input */}
        {!formValues.isMember && (
          <FormRow
            type="text"
            handleChange={handleChange}
            value={formValues.name}
            name="name"
          />
        )}
        {/* email from input */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={formValues.email}
        />

        {/* Password form input */}
        <FormRow
          type="password"
          handleChange={handleChange}
          value={formValues.password}
          name="password"
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {formValues.isMember
            ? "Don't have an Account? "
            : "Already a Member? "}
          <button type="button" className="form-btn" onClick={toggleMember}>
             {formValues.isMember ? "Register" : "Login"}
          </button>
        </p>
        <p>{errorMessage}</p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  .form-input {
    font-size: 0.9rem;
  }
  div {
    margin-bottom: 0.8rem;
  }
  .form-btn {
    background: transparent;
    color: var(--light-purple);
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  p {
    letter-spacing: var(--letterSpacing);
    font-size: 1rem;
  }
  .btn-block {
    display: block;
    margin-bottom: 0.4rem;
  }
`;

export default Register;
