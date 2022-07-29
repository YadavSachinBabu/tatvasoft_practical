import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addUser } from "./Actions";

function InputComponent(props) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleValidation = (data) => {
    if (data?.firstName?.trim() === "") {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = handleValidation(userData);
    if (validation) {
      props?.addUser(userData);
      setUserData({
        firstName: "",
        lastName: "",
        gender: "",
      });
    }
  };
  return (
    <div className='input-main-container'>
      <Form className='input-form' onSubmit={handleSubmit}>
        <Form.Control
          type='text'
          className='input-fields'
          name='firstName'
          placeholder='First Name'
          value={userData.firstName}
          onChange={handleChange}
        />
        {error && (
          <span className='validation-message'>First name is required.</span>
        )}
        <Form.Control
          type='text'
          name='lastName'
          className='input-fields'
          placeholder='Last Name'
          value={userData.lastName}
          onChange={handleChange}
        />
        <Form.Select
          type='text'
          name='gender'
          className='input-fields'
          placeholder='Gender'
          value={userData.gender}
          onChange={handleChange}
        >
          <option value='' disabled>
            Gender
          </option>
          <option value='MALE'>Male</option>
          <option value='FEMALE'>Female</option>
        </Form.Select>
        <Button type='submit' className='save-button'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(InputComponent);
