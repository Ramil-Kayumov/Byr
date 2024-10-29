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
      <div className="mt-[60px]">
        <a className="text-[#F7A539]" href="/profile">
          Профиль
        </a>{" "}
        / <span className="text-[#848484]">Админ панель</span>
      </div>
      <h2 className="font-bold text-[54px] mt-[60px] ">Заказывают</h2>
      <div className=" mt-[60px] flex h-[70px] text-2xl font-semibold">
        <div className="w-[239px] border-b-[3px] border-black flex items-center ">
          Имя
        </div>
        <div className="w-[457px]  border-b-[3px] border-black flex items-center">
          Услуга
        </div>
        <div className="w-[319px] border-b-[3px] border-black flex items-center">
          Стоимость
        </div>
        <div className="w-[225px] border-b-[3px] border-black flex items-center">
          Стаутс
        </div>
      </div>
      <div className=" flex h-[80px] text-[#8C8C8C] font-medium text-xl">
        <div className="w-[239px] border-b-[2px] border-[#ADADAD] flex items-center">
          Николай
        </div>
        <div className="w-[457px]  border-b-[2px] border-[#ADADAD] flex items-center">
          Геологоразведка
        </div>
        <div className="w-[319px] border-b-[2px] border-[#ADADAD] flex items-center">
          25 000 руб
        </div>
        <div className="w-[225px] border-b-[2px] border-[#ADADAD] flex items-center">
          <div className="w-[166px] h-[40px] bg-[#45FF6E] text-base font-semibold rounded-xl flex items-center justify-center text-white">
            Оплачено
          </div>
        </div>
      </div>
      <div className=" flex h-[80px] text-[#8C8C8C] font-medium text-xl">
        <div className="w-[239px] border-b-[2px] border-[#ADADAD] flex items-center">
          Николай
        </div>
        <div className="w-[457px]  border-b-[2px] border-[#ADADAD] flex items-center">
          Геологоразведка
        </div>
        <div className="w-[319px] border-b-[2px] border-[#ADADAD] flex items-center">
          25 000 руб
        </div>
        <div className="w-[225px] border-b-[2px] border-[#ADADAD] flex items-center">
          <div className="w-[166px] h-[40px] bg-[#FE4545] text-base font-semibold rounded-xl flex items-center justify-center text-white">
            Не оплачено
          </div>
        </div>
      </div>
      <div className=" flex h-[80px] text-[#8C8C8C] font-medium text-xl">
        <div className="w-[239px]  border-[#ADADAD] flex items-center">
          Николай
        </div>
        <div className="w-[457px]   border-[#ADADAD] flex items-center">
          Геологоразведка
        </div>
        <div className="w-[319px]  border-[#ADADAD] flex items-center">
          25 000 руб
        </div>
        <div className="w-[225px]  border-[#ADADAD] flex items-center">
          <div className="w-[166px] h-[40px] bg-[#FEB445] text-base font-semibold rounded-xl flex items-center justify-center text-white">
            В процессе
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[54px] mt-[60px] ">Редактирование услуг</h2>
      <div className="h-[600px] mt-[50px] flex items-center gap-[75px]">
        <Card brand={cardInfo1} />
        <Card brand={cardInfo2} />
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer w-[78px] h-[78px] rounded-[10px] bg-[#033C7E] flex items-center justify-center"
        >
          <img src={add} alt="" />
        </motion.div>
      </div>
    </section>
  );
};
export default Admin;
