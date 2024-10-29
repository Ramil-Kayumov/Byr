import about from "../assets/img/about1.png";
import about2 from "../assets/img/about2.png";
import about3 from "../assets/img/about3.png";

import time from "../assets/icons/time.png";

const About = () => {
  return (
    <section className="my-container">
      <div className="mt-[60px]">
        <a className="text-[#F7A539]" href="/">
          Главная
        </a>{" "}
        / <span className="text-[#848484]">О нас</span>
      </div>
      <div className="flex flex-col md:flex-row mt-[100px] mb-[-80px] gap-[42px]">
        <div className="w-full md:w-[608px] grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-x-[48px] gap-y-0">
          <div className="h-[375px] col-start-1 row-start-1 col-end-2 row-end-3 rounded-[20px]">
            <img
              src={about}
              alt=""
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="h-[490px] mt-[-70px] col-start-1 md:col-start-2 row-start-2 col-end-2 row-end-5 rounded-[20px]">
            <img
              src={about2}
              alt=""
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="h-[375px] mt-[-120px] col-start-1 row-start-4 col-end-2 row-end-6 rounded-[20px]">
            <img
              src={about3}
              alt=""
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-[36px] md:text-[54px] font-bold">
            НЕМНОГО О НАС
          </h2>
          <p className="mt-5 w-full md:w-[585px] text-base md:text-lg">
            Мы - команда профессионалов, обладающая многолетним опытом в сфере
            буровых работ. Наша цель - предоставление высококачественных услуг
            по бурению скважин для различных нужд: от водоснабжения частных
            домов до реализации масштабных промышленных проектов. В своей работе
            мы руководствуемся принципами профессионализма, качества,
            оперативности и безопасности. Ценим время наших клиентов и выполняем
            работы точно в срок, согласованный в договоре. Строго соблюдаем
            требования безопасности на всех этапах работ, чтобы обеспечить
            безопасность как наших сотрудников, так и окружающей среды. Доверив
            нам бурение скважины, вы можете быть уверены в надежности, качестве
            и оперативности выполненных работ.
          </p>
          <div className="w-full md:w-[585px] h-[161px] py-[15px] px-6 border-2 rounded-[20px] mt-5 flex items-center gap-6">
            <img src={time} alt="" className="w-16 h-14" />
            <div className="">
              <h3 className="font-bold text-xl md:text-2xl">
                Соблюдение сроков
              </h3>
              <p className="font-medium text-base md:text-lg text-[#878282] mt-1">
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
