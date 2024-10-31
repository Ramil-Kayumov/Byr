import trend from "../assets/icons/trend.png";
// Компонент
import Card from "./home/card";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Картинки
import arrow from "../assets/icons/arrow.png";
import card from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from '../assets/img/card4.jpg'
import card5 from '../assets/img/card5.webp'
import card6 from '../assets/img/card6.webp'
import card7 from '../assets/img/card7.webp'
import card8 from '../assets/img/card8.webp'
import { Link } from "react-router-dom";
const Services = () => {
  // 1 слайдер
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
    header: "Монтаж кессонов",
    img: card4,
    price: "16000",
    text: "Монтаж кессонов — это установка герметичных конструкций для защиты скважин от загрязнений и обрушений.",
  };
  // 2 слайдер
  const cardInfo5 = {
    number: "01",
    header: "Бурение скважин на воду",
    img: card,
    price: "2000",
    text: "Бурение скважин на песок и артезианские воды для частных домов, коттеджных посёлков, промышленных объектов.",
  };
  const cardInfo6 = {
    number: "02",
    header: "Бурение под сваи",
    img: card3,
    price: "1800",
    text: "Комплексное изучение геологических условий участка для проектирования фундамента и выбора типа скважин.",
  };
  const cardInfo7 = {
    number: "03",
    header: "Геологические изыскания",
    img: card5,
    price: "8000",
    text: "Исследования грунта и подземных вод для оценки условий строительства и эксплуатации.",
  };
  const cardInfo8 = {
    number: "04",
    header: "Геологические изыскания",
    img: card6,
    price: "10000",
    text: "Изучение структуры и свойств грунтов для оценки устойчивости и безопасности строительства.",
  };
  // 3 слайдер
  const cardInfo9 = {
    number: "01",
    header: "Геологоразведка",
    img: card2,
    price: "25000",
    text: "Комплексное изучение геологических условий участка для проектирования фундамента и выбора типа скважин.",
  };
  const cardInfo10 = {
    number: "02",
    header: "Монтаж кессонов",
    img: card4,
    price: "16000",
    text: "Монтаж кессонов — это установка герметичных конструкций для защиты скважин от загрязнений и обрушений.",
  };
  const cardInfo11 = {
    number: "03",
    header: "Бурение для карьеров",
    img: card7,
    price: "50000",
    text: "Бурение для карьеров включает создание скважин для добычи полезных ископаемых и разработки месторождений.",
  };
  const cardInfo12 = {
    number: "04",
    header: "Бурение для добычи",
    img: card8,
    price: "31000",
    text: "Бурение для добычи обеспечивает доступ к ресурсам, таким как нефть, газ и минералы, из недр.",
  };
  return (
    <section className="my-container">
      <div className="mt-[60px]">
        <Link className="text-[#F7A539]" to="/">
          Главная
        </Link>{" "}
        / <span className="text-[#848484]">Услуги</span>
      </div>
      <div className="flex gap-5 items-center mt-3 mb-5">
        <h2 className="text-[32px] md:text-[54px] font-bold">Самые популярные услуги </h2>
        <img src={trend} alt="" className="w-[61px] h-[61px]" />
      </div>
      <Swiper
        className="h-[630px] pt-[40px]  flex justify-center my-container pl-[20px]  md:pl-[150px]"
        spaceBetween={230} // Установите отступ между карточками на 0
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
      <h2 className="text-[32px] md:text-[54px] font-bold mt-[60px] mb-5">Услуги до 15000 рублей</h2>
      <Swiper
        className="h-[630px] pt-[40px]  flex justify-center my-container pl-[20px]  md:pl-[150px]"
        spaceBetween={230} // Установите отступ между карточками на 0
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
          <Card brand={cardInfo5} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo6} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo7} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo8} />
        </SwiperSlide>
      </Swiper>
      <h2 className="text-[32px] md:text-[54px] font-bold mt-[60px] mb-5">Услуги более 15000 рублей</h2>
      <Swiper
        className="h-[630px] pt-[40px]  flex justify-center my-container pl-[20px]  md:pl-[150px]"
        spaceBetween={230} // Установите отступ между карточками на 0
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
          <Card brand={cardInfo9} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo10} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo11} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center ">
          <Card brand={cardInfo12} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Services;
