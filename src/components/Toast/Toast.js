import React from 'react';
import { ToastContainer } from "react-toastify";
import './Toast.css';

const Toast = () => {
  return (
    <React.Fragment>
      <ToastContainer autoClose={4000} />
    </React.Fragment>
  );
}

export default Toast;