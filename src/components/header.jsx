import { publicRoutes } from '../config/routes';
import { Link } from 'react-router-dom';
import React from "react";
import Auth from './modal/Auth.jsx';
import Register from './modal/register.jsx';

const Header = () => {
  const [isAuthOpen, setAuthOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);

  const handleAuthClose = () => {
    setAuthOpen(false);
  };

  const handleAuthOpen = () => {
    setAuthOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleSwitchToAuth = () => {
    setRegisterOpen(false);
    setAuthOpen(true);
  };

  return (
    <>
      <header className="h-[90px] text-black m-auto z-10">
        <div className="my-container flex justify-between items-center pt-7">
          <div className="flex gap-6 font-semibold">
            {publicRoutes.map((el, i) => (
              <Link key={i} to={el.path}>{el.name}</Link>
            ))}
          </div>
          <Link to='/' className="font-bold text-2xl">БурИнформ</Link>
          <div className="font-semibold flex gap-5 items-center">
            <button onClick={handleAuthOpen}>Войти</button>
            <a onClick={handleRegisterOpen} className="cursor-pointer w-[193px] text-sm h-[41px] bg-[#F7A539] rounded-lg text-white flex items-center justify-center">Зарегистрироваться</a>
          </div>
        </div>
      </header>
      <Auth isOpen={isAuthOpen} onClose={handleAuthClose} />
      <Register isOpen={isRegisterOpen} onClose={handleRegisterClose} onSwitchToAuth={handleSwitchToAuth} />
    </>
  );
};

export default Header;
