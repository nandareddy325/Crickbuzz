import React, { useState } from 'react';
import { auth } from './Firebase';
import { VscAccount } from 'react-icons/vsc';
import { FaSignInAlt } from 'react-icons/fa';

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({ email: '', password: '' });
  const { email, password } = data;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User signed up:', user);
        alert('Sign Up successfully');
        closeModal();
      })
      .catch((err) => {
        console.error('Error signing up:', err);
        alert('Error signing up');
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User signed in:', user);
        alert('Sign in successfully');
        closeModal();
      })
      .catch((err) => {
        console.error('Error signing in:', err);
        alert('Sign in Error');
      });
  };

  return (
    <div className="align-content-center">
      <a onClick={openModal} style={{ cursor: 'pointer' }}>
        <VscAccount />
      </a>

      {isModalOpen && (
        <div className="">
          <div className="modal show d-block " tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-fullscreen" role="document">
              <div className="modal-content ">
                <div className="modal-header mx-3">
                  <h5 className="text-center text-success fw-bold">Login to Cricbuzz</h5>
                  <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-body col-lg-4 col-md-4 col-10  mx-auto align-content-center">
                  <form className="p-3 border shadow rounded-3" onSubmit={signIn}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control shadow-none rounded-3 border-0 border-bottom border-2 fw-bold"
                        autoComplete="off"
                        value={email}
                        placeholder="Enter Email"
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        name="password"
                        className="form-control shadow-none rounded-3 border-0 border-bottom border-2 fw-bold"
                        autoComplete="new-password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div className="text-center sigupcricbuzz">
                      <button type="submit" className="btn btn-success w-100 mb-2">
                        Sign In <FaSignInAlt />
                      </button>
                      <a href="#" onClick={signUp} className="text-primary">
                        Sign up for Cricbuzz
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Optional Backdrop */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default LoginModal;
