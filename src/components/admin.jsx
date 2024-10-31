import Card from "./home/card";

import { motion } from "framer-motion";
import add from "../assets/icons/add.png";
import card from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
const Admin = () => {
  const cardInfo1 = {
    number: "01",
    header: "Бурение скважин на воду",
    img: card,
    price: "2000",
    text: "Бурение скважин на песок и артезианские воды для частных домов, коттеджных посёлков, промышленных объектов.",
  };
  const cardInfo2 = {
    number: "02",
    header: "Геологоразведка",
    img: card2,
    price: "25000",
    text: "Комплексное изучение геологических условий участка для проектирования фундамента и выбора типа скважин.",
  };
  const cardInfo3 = {
    number: "03",
    header: "Бурение под сваи",
    img: card3,
    price: "1800",
    text: "Комплексное изучение геологических условий участка для проектирования фундамента и выбора типа скважин.",
  };
  const cardInfo4 = {
    number: "04",
    header: "Бурение скважин на воду",
    img: card,
    price: "2000",
    text: "Бурение скважин на песок и артезианские воды для частных домов, коттеджных посёлков, промышленных объектов.",
  };
  return (
   <section className="my-container">
  <div className="mt-[60px] text-center md:text-left">
    <a className="text-[#F7A539]" href="/profile">
      Профиль
    </a>{" "}
    / <span className="text-[#848484]">Админ панель</span>
  </div>
  <h2 className="font-bold text-[32px] md:text-[54px] mt-[40px]">Заказывают</h2>
  
  <div className="hidden md:flex mt-[40px]  flex-col md:flex-row text-2xl font-semibold">
    <div className="flex-1 border-b-[3px] border-black flex items-center py-2 text-center md:text-left">
      Имя
    </div>
    <div className="flex-1 border-b-[3px] border-black flex items-center py-2 text-center md:text-left">
      Услуга
    </div>
    <div className="flex-1 border-b-[3px] border-black flex items-center py-2 text-center md:text-left">
      Стоимость
    </div>
    <div className="flex-1 border-b-[3px] border-black flex items-center py-2 text-center md:text-left">
      Статус
    </div>
  </div>

  {/* Заказ 1 */}
  <div className="flex flex-col  md:flex-row text-[#8C8C8C] font-medium text-xl pt-3">
    <div className=" flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      <p className="m-auto md:m-0">Николай</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">Бурение под сваи</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      <p className="m-auto md:m-0"> 25 000 руб</p>
     
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      <div className="shadow-lg m-auto md:m-0 w-[166px] h-[40px] bg-[#45FF6E] text-base font-semibold rounded-xl flex items-center justify-center text-white">
        Оплачено
      </div>
    </div>
  </div>

  {/* Заказ 2 */}
  <div className="flex flex-col md:flex-row text-[#8C8C8C] font-medium text-xl pt-4">
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      
      <p className="m-auto md:m-0">Андрей</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">Геологоразведка</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">1 800 руб</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      <div className="shadow-lg m-auto md:m-0 w-[166px] h-[40px] bg-[#FE4545] text-base font-semibold rounded-xl flex items-center justify-center text-white">
        Не оплачено
      </div>
    </div>
  </div>

  {/* Заказ 3 */}
  <div className="flex flex-col md:flex-row text-[#8C8C8C] font-medium text-xl mt-4">
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">Дарья</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">Геологоразведка</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
       <p className="m-auto md:m-0">16 000 руб</p>
    </div>
    <div className="flex-1 border-b-[2px] border-[#ADADAD] flex items-center py-2 text-center md:text-left">
      <div className="shadow-lg m-auto md:m-0 w-[166px] h-[40px] bg-[#FEB445] text-base font-semibold rounded-xl flex items-center justify-center text-white">
        В процессе
      </div>
    </div>
  </div>

  <h2 className="font-bold text-[32px] md:text-[54px] mt-[60px]">Редактирование услуг</h2>
  <div className=" h-[1500px] md:h-[620px] pl-[40px] pt-[35px] mt-[50px] flex flex-col md:flex-row items-center gap-5 overflow-x-auto">
    <Card brand={cardInfo1} />
    <Card brand={cardInfo2} />
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="cursor-pointer w-[78px] h-[78px] rounded-[10px] bg-[#033C7E] flex items-center justify-center shadow-lg"
    >
      <img src={add} alt="" />
    </motion.div>
  </div>
</section>

  );
};
export default Admin;
