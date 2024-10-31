// импорт картинок
import quality from "../../assets/icons/quality.png";
import price from "../../assets/icons/price.png";
import expiriens from "../../assets/icons/expiriens.png";

import {motion} from 'framer-motion' //Библиотека для анимаций

const Hero = () => {
  return (
    // Главная
    <motion.section initial={{ opacity: 0 }} // Начальное положение и прозрачность
    animate={{ opacity: 1 }} // Конечное положение и полная видимость
    transition={{ duration: 1 }}> 
      <div className="bg-[url('./assets/img/hero.png')] w-full h-[680px] bg-no-repeat bg-cover bg-bottom pt-[96px] lg:h-[546px]">
        <div className="my-container flex flex-row gap-5">
          <div className="w-[71px] h-[390px] border-[#F7A539] border-s-4 border-y-4 rounded-lg mt-1 lg:h-[351px]"></div>
          <div className="flex flex-col text-white w-full md:w-[643px] font-bold">
            <p className="mb-3 text-center md:text-left">
              Инженерные изыскания и комплексное сопровождение!
            </p>
            <h2 className="text-[32px] md:text-[55px] leading-[40px] md:leading-[50px] mb-2 text-center md:text-left">
              БУРОВЫЕ РАБОТЫ <br />
              <span className="text-[28px] md:text-[40px]">
                С <span className="text-[#F7A539]">ГАРАНТИЕЙ</span> РЕЗУЛЬТАТА
              </span>
            </h2>
            <p className="text-[#D9D9D9] mb-3 text-center md:text-left">
              Мы - команда профессионалов с многолетним опытом в сфере буровых
              работ. Предлагаем широкий спектр услуг: от бурения скважин на воду
              до инженерно-геологических изысканий. Современное оборудование и
              индивидуальный подход к каждому клиенту - гарантия безупречного
              результата.
            </p>
            <motion.button whileHover={{scale:1.1}} className="bg-[#F7A539] h-[60px] md:h-[74px] w-full md:w-[458px] rounded-3xl text-xl md:text-2xl">
              Заказать консультацию
            </motion.button>
          </div>
        </div>
      </div>
          {/* Подглавная */}
      <section className="my-container flex flex-col md:flex-row items-center justify-center ">
        <div  className="w-full md:w-[410px] h-[217px] border-solid border-2 border-[#D9D9D9] p-[20px] flex items-center gap-4">
          <img src={quality} alt="Высокое качество" className="w-[50px] h-[50px]" />
          <div className="font-semibold">
            <h2 className="text-xl lg:text-2xl mb-2">Высокое качество</h2>
            <p className="text-[#878282] text-xs xl:text-sm">
              Мы используем только современные оборудование, а наши специалисты
              строго соблюдают технологии бурения.
            </p>
          </div>
        </div>
        <div  className="w-full md:w-[410px] h-[217px] border-solid border-2 border-[#D9D9D9] p-[20px] flex items-center gap-4">
          <img src={expiriens} alt="Большой опыт" className="w-[50px] h-[50px]" />
          <div className="font-semibold">
            <h2 className="text-xl lg:text-2xl mb-2">Большой опыт</h2>
            <p className="text-[#878282]  text-xs xl:text-sm">
              Наши специалисты успешно реализовали множество проектов различной
              сложности и накопили богатый опыт.
            </p>
          </div>
        </div>
        <div  className="w-full md:w-[410px] h-[217px] border-solid border-2 border-[#D9D9D9] p-[20px] flex items-center gap-4">
          <img src={price} alt="Честные цены" className="w-[50px] h-[50px]" />
          <div className="font-semibold">
            <h2 className="text-xl lg:text-2xl mb-2">Честные цены</h2>
            <p className="text-[#878282] text-xs  xl:text-sm">
              Мы предлагаем прозрачную систему ценообразования, без скрытых
              платежей и наценок.
            </p>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Hero;
