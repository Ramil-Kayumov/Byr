import close from '../../assets/icons/close.png'

const Auth = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-[#31302E] h-[650px] w-[600px] mx-auto border-2 border-black rounded-lg shadow-md pt relative">
        <a onClick={onClose}>
          <img src={close} alt="" className='cursor-pointer absolute right-6 top-8'/>
        </a>
        <div className="flex flex-col items-center  text-white mt-[53px]">
          
          <h2 className='text-[40px] font-semibold'>Войти</h2>
          <input type="email" placeholder='E-mail' className='placeholder:text-white mt-[50px] px-8 w-[487px] h-[60px] rounded-[20px] bg-[#615858]' />
          <input type="password" placeholder='Пароль' className='placeholder:text-white mt-6 px-8 w-[487px] h-[60px] rounded-[20px] bg-[#615858]' />
          <button className='mt-[60px] w-[221px] h-[72px] rounded-[20px] bg-[#F7A539] text-2xl font-semibold'>Войти</button>
          <p className='font-semibold text-2xl mt-6'>У вас <span className='text-[#74A0F5] cursor-pointer'>нет учетной записи</span> ?</p>
          <div className="mt-3 flex flex-col cursor-pointer">
            <p className='font-semibold text-2xl text-[#74A0F5]'>Забыли пароль?</p>
            <div className="w-[200px] h-[3px] bg-[#74A0F5]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
