import user from "../assets/img/user1.jpg";
import arrow_right from "../assets/icons/arrow-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card_profile from "./profileCard/card_profile";


import card from '../assets/img/card1.png';
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";

const Profile = () => {
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
        <a className="text-[#F7A539]" href="/admin">
          Админ панель
        </a>{" "}
        / <span className="text-[#848484]">Профиль</span>
      </div>
      <h2 className="font-bold text-[54px] mt-[60px]">Профиль</h2>
      <div className="flex mt-[60px] gap-[30px]">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden ">
          <img src={user} alt="" />
        </div>
        <div className="">
          <h3 className="font-semibold text-2xl ">Николай Андреевич</h3>
          <p className="font-medium text-lg text-[#797979]">Заказчик</p>
        </div>
      </div>
      <div className="mt-[60px] mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="text-2xl font-medium">Ваши заказы</p>
          <img src={arrow_right} alt="" />
        </div>
        <a
          href="#"
          className="w-[168px] h-[61px] bg-[#F7A539] rounded-[20px] flex items-center justify-center text-white font-bold text-xl"
        >
          Купить
        </a>
      </div>
      <Swiper
        className="h-[630px] pt-[40px] flex justify-center my-container pl-[150px]"
        spaceBetween={230}
        slidesPerView={3}
        
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex justify-center ">
          <Card_profile brand={cardInfo1} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card_profile brand={cardInfo2} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card_profile brand={cardInfo3} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card_profile brand={cardInfo4} />
        </SwiperSlide>
      </Swiper>
      <div className="mt-[60px] flex items-center justify-center">
        <div className="w-[569px] h-[80px] bg-[#EEEEEE] rounded-[20px] flex items-center justify-center font-bold text-2xl">Общая стоимость ≈ 27800 рублей</div>
      </div>
    </section>
  );
};

export default Profile;
