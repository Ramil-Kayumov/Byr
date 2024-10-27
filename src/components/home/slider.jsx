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
    img: card,
    price: "2000",
    text: "Бурение скважин на песок и артезианские воды для частных домов, коттеджных посёлков, промышленных объектов.",
  };
 
  return (
    <>
      <section className="bg-[#F2F2F2] h-[912px] mt-14">
        <div className="my-container">
          <div className="flex justify-between pt-14  font-semibold mb-10">
            <h2 className="text-[56px]">НАШИ УСЛУГИ</h2>
            <div className="flex items-center gap-2">
              <div className="cursor-pointer">
                <a href="#" className="text-[#55A4FF] ">
                  Смотреть все
                </a>
                <div className="w-[109px] h-[1px] bg-[#55A4FF]"></div>
              </div>

              <img src={arrow} alt="" className="w-[34px]" />
            </div>
          </div>
        </div>
        <Swiper
          className="h-[630px] pt-[40px] pl-[330px] max-w-[1840px]"
          spaceBetween={-50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card brand={cardInfo1} />
          </SwiperSlide>
          <SwiperSlide>
          <Card brand={cardInfo2} />
          </SwiperSlide>
          <SwiperSlide>
          <Card brand={cardInfo3} />
          </SwiperSlide>
          <SwiperSlide>
          <Card brand={cardInfo4} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Slider;
