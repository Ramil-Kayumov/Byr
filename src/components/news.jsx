import { motion } from "framer-motion";

const News = () => {
  return (
    <section className="my-container news">
      <div className="mt-[60px]">
        <a className="text-[#F7A539]" href="/">
          Главная
        </a>{" "}
        / <span className="text-[#848484]">Новости</span>
      </div>
      <h2 className="font-bold text-[54px] mt-[60px]">НОВОСТИ</h2>
      <span class="pb-5 grid grid-cols-5 grid-rows-5 gap-y-[60px] gap-x-7 gap-y-15 mt-[60px]">
        <motion.div
          initial={{ y: -200, opacity: 0 }} // Начальное положение и прозрачность
          animate={{ y: 0, opacity: 1 }} // Конечное положение и полная видимость
          transition={{ duration: 0.5 }}

          class="col-start-5 col-end-6 row-start-1  row-end-4 bg-gradient-1 rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between "
        >
          <div>
            <p className="text-sm text-white opacity-50 mb-3">
              Проекты и результаты деятельности
            </p>
            <h3 className="text-2xl font-bold text-white">
              Итоги финансовых периодов
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px] mt-6 bg-white font-bold  text-xl"
          >
            Читать
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }} // Начальное положение и прозрачность
          animate={{ y: 0, opacity: 1 }} // Конечное положение и полная видимость
          transition={{ duration: 0.5 }}
          class="col-start-1 col-end-2 row-start-3 row-end-6 bg-gradient-2 rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-white opacity-50 mb-2">
              Бизнес-развитие и рост
            </p>
            <h3 className="text-2xl font-bold text-white">
              Партнёрства и альянсы
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px]  bg-white mt-6 font-bold  text-xl"
          >
            Читать
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }} // Начальное положение и прозрачность
          animate={{ y: 0, opacity: 1 }} // Конечное положение и полная видимость
          transition={{ duration: 0.5 }}
          class="col-start-2 col-end-3 row-start-3 row-end-6 bg-gradient-3 rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between"
        >
          <div>
            <p className="text-[13px] text-white opacity-50 mb-2">
              Технологии и инновации
            </p>
            <h3 className="text-2xl font-bold text-white">
              Завершение крупных проектов
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px] bg-white font-bold mt-6  text-xl"
          >
            Читать
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Начальное положение и прозрачность
          animate={{ x: 0, opacity: 1 }} // Конечное положение и полная видимость
          transition={{ duration: 0.5 }}
          class="col-start-4 col-end-5 row-start-1 row-end-4 bg-gradient-0 rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-white opacity-50 mb-3">
              Бизнес-развитие и рост
            </p>
            <h3 className="text-2xl font-bold text-white">Новые партнерства</h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px] mt-6 bg-white font-bold  text-xl"
          >
            Читать
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Начальное положение и прозрачность
          animate={{ x: 0, opacity: 1 }} // Конечное положение и полная видимость
          transition={{ duration: 0.5 }}
          class="col-start-1 col-end-4 row-start-1 row-end-3 bg-gradient-5 h-[256px] rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between"
        >
          <div>
            <p className="text-sm text-white opacity-50 mb-3">
              Бизнес-развитие и рост
            </p>
            <h3 className="text-2xl font-bold text-white">
              Расширение географии <br /> деятельности:
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px] mt-6 bg-white font-bold  text-xl"
          >
            Читать
          </motion.button>
        </motion.div>
        <div class="col-start-3 col-end-6 row-start-4 row-end-6 bg-gradient-4 rounded-[20px] pt-[30px] pb-6 px-[25px] my-shadow flex flex-col justify-between">
          <div>
            <p className="text-sm text-white opacity-50 mb-3">
              Законодательные и регулирующие изменения
            </p>
            <h3 className="text-2xl font-bold text-white">
              Изменения в законодательстве и <br /> регулировании
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[170px] h-[53px] rounded-[5px] mt-6 bg-white font-bold  text-xl"
          >
            Читать
          </motion.button>
        </div>
      </span>
    </section>
  );
};
export default News;
