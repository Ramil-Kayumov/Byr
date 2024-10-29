import { publicRoutes } from "../config/routes";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import React from "react";
import Auth from "./modal/Auth.jsx";
import Register from "./modal/register.jsx";

const Header = () => {
  const [isAuthOpen, setAuthOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false); // Состояние для бургер-меню

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

  const handleSwitchToRegister = () => {
    setAuthOpen(false);
    setRegisterOpen(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header initial={{y:-60}} animate={{y:0}} transition={{transition:2}} className="h-[90px] text-black m-auto z-10">
        <div className="my-container flex justify-between items-center pt-7">
          <div className="flex gap-6 font-semibold">
            {/* Бургер-меню для мобильных устройств */}
            <button onClick={toggleMenu} className="md:hidden">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            {/* Меню для мобильных устройств */}
            {isMenuOpen && (
              <div className="absolute top-[90px] left-0 right-0 bg-white shadow-lg z-20">
                {publicRoutes.map((el, i) => (
                  <Link key={i} to={el.path} className="block p-4 border-b">
                    {el.name}
                  </Link>
                ))}
                {/* Кнопка регистрации также скрыта на мобильных устройствах */}
                <a
                  onClick={handleRegisterOpen}
                  className="block p-4 border-b cursor-pointer w-full text-center text-sm h-[41px] bg-[#F7A539] rounded-lg text-white"
                >
                  Зарегистрироваться
                </a>
              </div>
            )}

            {/* Меню для десктопов */}
            <div className="hidden md:flex gap-6">
              {publicRoutes.map((el, i) => (
                <Link key={i} to={el.path}>
                  <motion.p 
                  whileHover={{y:5}}
                  >{el.name}</motion.p>
                </Link>
              ))}
            </div>
          </div>
          <Link to="/" className="font-bold text-2xl">
          <motion.p whileHover={{scale:1.1, transition:3}}> БурИнформ</motion.p>
           
          </Link>
          <div className="font-semibold flex gap-5 items-center">
            {/* Кнопка входа всегда видима */}
            <button onClick={handleAuthOpen}>Войти</button>
            {/* Кнопка регистрации скрыта на мобильных устройствах */}
            <a
              onClick={handleRegisterOpen}
              className=" md:flex hidden cursor-pointer w-[193px] text-sm h-[41px] bg-[#F7A539] rounded-lg text-white  items-center justify-center"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      </motion.header>
      <Auth
        isOpen={isAuthOpen}
        onClose={handleAuthClose}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={handleRegisterClose}
        onSwitchToAuth={handleSwitchToAuth}
      />
    </>
  );
};

export default Header;
