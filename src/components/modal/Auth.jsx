import { motion, AnimatePresence } from "framer-motion";
import close from "../../assets/icons/close.png";
import mail from "../../assets/icons/mail.png"; // Иконка для email
import password from "../../assets/icons/password.png"; // Иконка для пароля

const Auth = ({ isOpen, onClose, onSwitchToRegister }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="bg-[#31302E] h-[560px] lg:h-[650px] w-[90%] lg:w-[600px] mx-auto border-2 border-black rounded-lg shadow-md pt relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8, transition: { duration: 0.3 } }}
          >
            <a onClick={onClose}>
              <motion.img
                src={close}
                whileHover={{ scale: 1.2 }}
                alt=""
                className="cursor-pointer absolute right-6 top-8"
              />
            </a>
            <div className="flex flex-col items-center text-white mt-[53px]">
              <h2 className="text-[28px] md:text-[40px] font-semibold">
                Войти
              </h2>

              <div className="relative mt-[30px] md:mt-[50px] w-[90%] md:w-[487px]">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="placeholder:text-white px-4 md:px-8 w-full h-[60px] rounded-[20px] bg-[#615858] pr-12 outline-none"
                />
                <img
                  src={mail}
                  alt="user icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[20px] h-[16px]"
                />
              </div>

              <div className="relative mt-6 w-[90%] md:w-[487px]">
                <input
                  type="password"
                  placeholder="Пароль"
                  className="placeholder:text-white px-4 md:px-8 w-full h-[60px] rounded-[20px] bg-[#615858] pr-12 outline-none"
                />
                <img
                  src={password}
                  alt="password icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[20px]"
                />
              </div>

              <motion.a whileHover={{scale:0.9}}
                href="\profile"
                className="cursor-pointer flex items-center justify-center mt-[30px] md:mt-[60px] w-[90%] md:w-[221px] h-[72px] rounded-[20px] bg-[#F7A539] text-2xl font-semibold"
              >
                Войти
              </motion.a>
              <p className="font-semibold text-2xl mt-6 text-center">
                У вас{" "}
                <motion.span
                  className="text-[#74A0F5] cursor-pointer"
                  onClick={onSwitchToRegister}
                  initial={{ background: "transparent", color: "#74A0F5" }}
                  whileHover={{
                    background: [
                      "linear-gradient(90deg, #F7A539, #74A0F5)",
                      "linear-gradient(90deg, #74A0F5, #F7A539)",
                      "linear-gradient(90deg, #F7A539, #74A0F5)",
                    ],
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                >
                  нет учетной записи
                </motion.span>{" "}
                ?
              </p>
              <div className="mt-3 flex flex-col cursor-pointer items-center">
                <motion.p
                initial={{ background: "transparent", color: "#74A0F5" }}
                whileHover={{
                  background: [
                    "linear-gradient(90deg, #F7A539, #74A0F5)",
                    "linear-gradient(90deg, #74A0F5, #F7A539)",
                    "linear-gradient(90deg, #F7A539, #74A0F5)",
                  ],
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
                className="font-semibold text-2xl text-[#74A0F5]">
                  Забыли пароль?
                </motion.p>
                <div className="w-[60%] md:w-[200px] h-[3px] bg-[#74A0F5]"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Auth;
