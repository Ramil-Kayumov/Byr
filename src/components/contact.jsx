import map from "../assets/icons/map-pin.png";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <>
  <motion.section
  initial={{  opacity: 0 }} // Начальное положение и прозрачность
  animate={{  opacity: 1 }} // Конечное положение и полная видимость
  transition={{ duration: 1 }} className="my-container">
    <div className="mt-[60px]">
      <a className="text-[#F7A539]" href="/">
        Главная
      </a>{" "}
      / <span className="text-[#848484]">Контакты</span>
    </div>
    <div
      className="mt-[40px]"
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
    >
      <a
        href="https://yandex.ru/maps/213/moscow/search/121087%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%91%D0%A6%20%C2%AB%D0%91%D0%B0%D1%80%D0%BA%D0%BB%D0%B0%D0%B9%20%D0%9F%D0%BB%D0%B0%D0%B7%D0%B02%C2%BB%20%D0%A3%D0%BB.%20%D0%91%D0%B0%D1%80%D0%BA%D0%BB%D0%B0%D1%8F%2C%20%D0%B4.%206%2C%20%D1%81%D1%82%D1%80.%205%2C%20%D1%8D%D1%82%D0%B0%D0%B6%202%2C%20%D0%BE%D1%84%D0%B8%D1%81%20217./?utm_medium=mapframe&utm_source=maps"
        className="absolute text-[#eee] text-xs top-0"
      >
        121087, Москва, БЦ «Барклай Плаза2» Ул. Барклая, д. 6, стр. 5, этаж 2,
        офис 217. в Москве
      </a>
      <a
        href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
        className="absolute text-[#eee] text-xs top-[14px]"
      >
        Москва
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=37.508251%2C55.739232&mode=search&sll=40.757431%2C53.902707&source=serp_navig&sspn=20.290323%2C8.781382&text=121087%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%91%D0%A6%20%C2%AB%D0%91%D0%B0%D1%80%D0%BA%D0%BB%D0%B0%D0%B9%20%D0%9F%D0%BB%D0%B0%D0%B7%D0%B02%C2%BB%20%D0%A3%D0%BB.%20%D0%91%D0%B0%D1%80%D0%BA%D0%BB%D0%B0%D0%BA%D0%B0%2C%20%D0%B4.%206%2C%20%D1%81%D1%82%D1%80.%205%2C%20%D1%8D%D1%82%D0%B0%D0%B6%202%2C%20%D0%BE%D1%84%D0%B8%D1%81%20217.&z=16.77"
        width="100%"
        height="400"
        allowFullScreen
        style={{ position: "relative" }}
      ></iframe>
    </div>
    <div className="flex flex-col md:flex-row justify-between mt-[70px] gap-5">
      <div className="w-full md:w-[475px] font-medium flex gap-[15px] mb-5 md:mb-0">
        <img src={map} alt="" className="w-[30px] h-[30px]" />
        <div>
          <p className="mb-[45px]">
            121087, Москва, БЦ «Барклай Плаза2» Ул. <br /> Барклая, д. 6, стр.
            5, этаж 2, офис 217.
          </p>
          <p className="mb-[15px]">
            Контактные данные: <br />
            +7 800 550-98-04
          </p>
          <p className="text-[#F7A539] ">ByrMoscow@mail.ru</p>
        </div>
      </div>
      <div className="m-auto w-[320px] h-[4px] md:w-[10px] md:h-[219px] bg-[#F7A539]   md:mx-5"></div>
      <div className="w-full md:w-[475px] font-medium flex gap-[15px]">
        <img src={map} alt="" className="w-[30px] h-[30px]" />
        <div>
          <p className="mb-[45px]">
            197022, Санкт-Петербург, БЦ «Гайот», ул. Профессора Попова д.23
            лит.Д, пом. 28Н,
            <br />
            офис 413.
          </p>
          <p className="mb-[15px]">
            Контактные данные: <br />
            +7 800 550-98-04
          </p>
          <p className="text-[#F7A539] ">ByrSanct-Petersburg@mail.ru</p>
        </div>
      </div>
    </div>
  </motion.section>
  <section className="pb-5 md:h-[460px] w-full bg-[url('./assets/img/bg-2.png')] mt-[115px] mb-[60px]">
    <div className="my-container">
      <div className="flex flex-col md:flex-row justify-center pt-[74px] gap-8">
        <div className="text-white font-bold w-full md:w-[614px]">
          <h3 className="text-2xl md:text-4xl">Остались вопросы? Свяжитесь с Нами!</h3>
          <p className="text-[#D9D9D9] font-medium mt-6">
            Свяжитесь с нами любым удобным способом: по телефону, электронной почте или через форму обратной связи. Наши менеджеры ответят на все ваши вопросы, помогут с выбором услуги и оформлением заказа. Мы всегда рады помочь!
          </p>
        </div>
        <div className="flex flex-col w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="text" placeholder="Ваше Имя:" className="h-[63px] w-full md:w-[213px] rounded-[20px] pl-4" />
            <input type="phone" placeholder="Телефон:" className="h-[63px] w-full md:w-[213px] rounded-[20px] pl-4" />
          </div>
          <input type="email" placeholder="E-mail:" className="mt-5 h-[62px] w-full md:w-[456px] rounded-[20px] pl-4" />
          <textarea placeholder="Комментарий" className="w-full md:w-[456px] h-[105px] rounded-[20px] pl-4 mt-5 pt-4 pr-4"></textarea>
          <motion.button whileHover={{scale:1.1}} className="w-full md:w-[168px] h-[61px] bg-[#F7A539] text-white rounded-[20px] mt-5 font-bold text-xl">Отправить</motion.button>
        </div>
      </div>
    </div>
  </section>
</>

    
  );
};
export default Contact;
