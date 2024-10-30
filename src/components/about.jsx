import about from "../assets/img/about1.png";
import about2 from "../assets/img/about2.png";
import about3 from "../assets/img/about3.png";

import time from "../assets/icons/time.png";

const About = () => {
  return (
    <section className="my-container">
    <div className="mt-10">
      <a className="text-[#F7A539]" href="/">
        Главная
      </a>{" "}
      / <span className="text-[#848484]">О нас</span>
    </div>
    <div className="flex flex-col gap-8 mt-16 mb-16 md:mt-20 md:mb-0 md:flex-row">
      <div className=" md:w-[608px]  grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 m-auto ">
        <div className=" rounded-[20px] overflow-hidden">
          <img
            src={about}
            alt=""
            className="w-[250px] h-[350px] md:w-[292px] md:h-[392px]  rounded-[20px]"
          />
        </div>
        <div className="mt-4 md:mt-[160px]  rounded-[20px] overflow-hidden">
          <img
            src={about2}
            alt=""
            className="w-[250px] h-[350px] md:w-[292px] md:h-[480px]  rounded-[20px]"
          />
        </div>
        <div className="mt-4 md:mt-[-200px] aspect-[3/4] rounded-[20px] overflow-hidden">
          <img
            src={about3}
            alt=""
            className="w-[250px] h-[350px] md:w-[292px] md:h-[392px]  rounded-[20px]"
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">НЕМНОГО О НАС</h2>
        <p className="text-base md:text-lg mb-8">
          Мы - команда профессионалов, обладающая многолетним опытом в сфере
          буровых работ. Наша цель - предоставление высококачественных услуг по
          бурению скважин для различных нужд: от водоснабжения частных домов до
          реализации масштабных промышленных проектов. В своей работе мы
          руководствуемся принципами профессионализма, качества, оперативности и
          безопасности. Ценим время наших клиентов и выполняем работы точно в
          срок, согласованный в договоре. Строго соблюдаем требования безопасности на
          всех этапах работ, чтобы обеспечить безопасность как наших сотрудников,
          так и окружающей среды. Доверив нам бурение скважины, вы можете быть
          уверены в надежности, качестве и оперативности выполненных работ.
        </p>
        <div className="w-full md:w-[585px] h-40 py-4 px-6 border-2 rounded-[20px] flex items-center gap-6">
          <img src={time} alt="" className="w-16 h-14" />
          <div className="">
            <h3 className="font-bold text-xl md:text-2xl mb-1">Соблюдение сроков</h3>
            <p className="font-medium text-base md:text-lg text-[#878282]">
              Мы ценим время наших клиентов и выполняем все работы точно в
              оговоренные сроки, без задержек и срывов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default About;
