import {motion} from 'framer-motion'

function Card(props)  {
  return (
    <>
      <div className="w-[413px] h-[566px] bg-white my-shadow relative rounded-2xl">
        <div className="w-[77px] h-[77px] bg-white rounded-full my-shadow flex items-center justify-center text-[#878282] font-semibold text-4xl relative top-[-33px] left-[-33px]">
        { props.brand.number }
        </div>
        <div className="flex flex-col pl-10 pr-10 mt-[-50px]">
          <h2 className="font-semibold text-2xl mb-6">
          { props.brand.header }
          </h2>
          <div className="w-[331px] h-[267px] mb-5 relative">
            <img src={props.brand.img} alt="" className="w-full h-full object-cover" />
            <div className="w-[153px] h-[35px] bg-[#E5E5E5] rounded-tr-lg absolute bottom-0 left-0 text-sm font-medium text-[#898989] pt-[6px] pl-4">
              От
              <span className="text-base text-black font-semibold"> { props.brand.price } </span>
              рублей
            </div>
          </div>
          <p className="mb-3 font-medium w-[325px]">
          { props.brand.text }
          </p>
          <motion.button whileHover={{scale:1.1}} className="w-[168px] h-[61px] bg-[#F7A539] text-white rounded-[20px] text-xl font-semibold">
            Заказать
          </motion.button>
        </div>
      </div>
    </>
  );
};
export default Card;
