// Компонент
import Card from "./card"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Картинки
import arrow from "../../assets/icons/arrow.png";
import card from "../../assets/img/card1.png";
import card2 from "../../assets/img/card2.png";
import card3 from "../../assets/img/card3.png";
import card4 from '../../assets/img/card4.jpg'

import {motion} from 'framer-motion'

const Slider = () => {
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
    img: card4,
    price: "16000",
    text: "Бурение скважин на песок и артезианские воды для частных домов, коттеджных посёлков, промышленных объектов.",
  };
 
  return (
    <>
      <section className="bg-[#F2F2F2] h-[912px] mt-14">
      <div className="my-container">
    <div className="flex flex-col md:flex-row justify-between pt-14 font-semibold mb-10">
      <h2 className="text-[40px] md:text-[56px]">НАШИ УСЛУГИ</h2>
      <motion.a whileHover={{scale:1.1}} whileFocus={{scale:1.1}} href="\services" className="flex items-center gap-2 cursor-pointer">
        <div>
          <a href="\services" className="text-[#55A4FF]">
            Смотреть все
          </a>
          <div className=" md:w-[109px] h-[1px] bg-[#55A4FF]"></div>
        </div>
        <img src={arrow} alt="" className="w-[24px] md:w-[34px]" />
      </motion.a>
    </div>
  </div>
        <Swiper
  className="h-auto pt-[40px]  md:h-[630px] flex justify-center my-container  md:pl-[150px]"
  spaceBetween={230} 
  breakpoints={{
    470: {
      slidesPerView: 1, // Для мобильных устройств
    },
    640: {
      slidesPerView: 2, // Для небольших планшетов
    },
    768: {
      slidesPerView: 2, // Для больших планшетов
    },
    1024:{
      slidesPerView:3
    }
    
  }}
  loop={true}
 
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide className="flex justify-center "> 
    <Card brand={cardInfo1} />
  </SwiperSlide>
  <SwiperSlide className="flex justify-center "> 
    <Card brand={cardInfo2} />
  </SwiperSlide>
  <SwiperSlide className="flex justify-center ">
    <Card brand={cardInfo3} />
  </SwiperSlide>
  <SwiperSlide className="flex justify-center "> 
    <Card brand={cardInfo4} />
  </SwiperSlide>
</Swiper>
      </section>
    </>
  );
};
export default Slider;
