import {publicRoutes} from '../config/routes'
import { Link } from 'react-router-dom';
import React from "react";
import Auth from './modal/Auth.jsx';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  return (
    <>
      <header className=" h-[90px]  text-black m-auto z-10 ">
        <div className="my-container flex justify-between items-center pt-7">
          <div className="flex gap-6 font-semibold">
            {publicRoutes.map((el,i)=><a  key={i} href={el.path} src={Link}>{el.name}</a>)}
          </div>
          <div className="font-bold text-2xl">БурИнформ</div>
          <div className="font-semibold flex gap-5 items-center" >
            <button onClick={handleOpen}>Войти</button>
            <a href="#" className="w-[193px] text-sm h-[41px] bg-[#F7A539] rounded-lg text-white flex items-center justify-center">Зарегистрироваться</a>
          </div>
        </div>
      </header>
      <Auth isOpen={open} onClose={handleClose}>

      </Auth>
    </>
  );
};

export default Header;
