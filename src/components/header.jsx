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
  const textVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
        loop: Infinity,
      },
    },
  };

  return (
    <>
      <motion.header initial={{y:-60}} animate={{y:0}} transition={{transition:2}} className="h-[90px] shadow-lg  text-black m-auto z-10">
        <div className="my-container flex justify-between items-center pt-7">
          <div className="flex gap-6 font-semibold">
            {/* Бургер-меню для мобильных устройств */}
            <button onClick={toggleMenu} className="lg:hidden">
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            {/* Меню для мобильных устройств */}
            {isMenuOpen && (
              <div className="h-[420px] absolute top-[90px] left-0 right-0 bg-white shadow-lg z-20">
                {publicRoutes.map((el, i) => (
                  <Link key={i} to={el.path} className="block p-4 border-b">
                    {el.name}
                  </Link>
                ))}
                {/* Кнопка регистрации также скрыта на мобильных устройствах */}
                <motion.a
                  whileHover={{scale:1.1}}
                  onClick={handleRegisterOpen}
                  className="flex items-center justify-center p-4 border- cursor-pointer w-full text-center text-sm h-[41px] bg-[#F7A539] rounded-lg text-white"
                >
                  Зарегистрироваться
                </motion.a>
              </div>
            )}

            {/* Меню для десктопов */}
            <div className="hidden lg:flex gap-6">
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
          <motion.p
          variants={textVariants}
            initial="initial"
            animate="animate"
          whileHover={{scale:1.1, transition:3}}> БурИнформ</motion.p>
           
          </Link>
          <div className="font-semibold flex gap-5 items-center">
            {/* Кнопка входа всегда видима */}
            <motion.button  
             initial={{ background: "transparent", color: "black" }}
             whileHover={{
               background: [
                 "linear-gradient(90deg, #F7A539, #74A0F5)",
                 "linear-gradient(90deg, #74A0F5, #F7A539)",
                 "linear-gradient(90deg, #F7A539, #74A0F5)",
               ],
               delay:2,
               WebkitBackgroundClip: "text",
               color: "transparent",
               transition: {
                 duration: 2,
                 ease: "easeInOut",
                 repeat: Infinity,
               },
             }}
            onClick={handleAuthOpen}>Войти</motion.button>
            {/* Кнопка регистрации скрыта на мобильных устройствах */}
            <motion.a
            whileHover={{scale:1.1}}
              onClick={handleRegisterOpen}
              className=" md:flex hidden cursor-pointer w-[193px] text-sm h-[41px] bg-[#F7A539] rounded-lg text-white  items-center justify-center"
            >
              Зарегистрироваться
            </motion.a>
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
