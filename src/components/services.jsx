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

const Services = () => {
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
        <a className="text-[#F7A539]" href="/">
          Главная
        </a>{" "}
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
  );
};
export default Services;
