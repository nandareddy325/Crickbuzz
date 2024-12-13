import React, { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import Modal from 'react-modal';
import { CgClose } from 'react-icons/cg';
import { auth } from './Firebase'; // Assuming db is not used in this component

// Modal Styling
const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      zIndex: '99'
    },
  };

const Model = () => {
  const subtitle = React.useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [data, setData] = useState({ email: '', password: '' });
  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SigUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        alert('Sign-up successful!');
        setIsOpen(false);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  const SigIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        alert('Sign-in successful!');
        setIsOpen(false);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  return (
    <div className="loginpage">
y      <div onClick={openModal}>
        <VscAccount />
      </div>

      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles} contentLabel="Example Modal"
      >
<div className='col-4 mx-auto mt-5'>
        <button onClick={closeModal} className="btn"><CgClose /></button>
        <h5 ref={subtitle} className="text-center text-primary fw-bold">Log In</h5>

        <form className="p-3 bg-light">
          <div className="">
            <input type="email" name="email"
              className="form-control shadow-none"
              autoComplete="off"
              value={email}
              placeholder="Enter Email"
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="form-control shadow-none"
              autoComplete="new-password"
              value={password}
              placeholder="Enter Password"
              onChange={changeHandler}
            />
          </div>
          <button onClick={SigIn} className="btn btn-primary w-100 fw-bold">
            Sign in
          </button>
          <div className="d-flex mt-3 justify-content-between">
            <p>
              Don't have an account? <a href="#" onClick={SigUp} >Sign up for Crickbuzz</a>
            </p>
          </div>
        </form>
        </div>
      </Modal>
    </div>
    
  );
};

export default Model;
