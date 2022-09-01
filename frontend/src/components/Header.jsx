import React from 'react';
import { MdLogin, MdLogout, MdCreate } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">taskSTACK</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <MdLogout /> logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <MdLogin /> login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <MdCreate /> register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
