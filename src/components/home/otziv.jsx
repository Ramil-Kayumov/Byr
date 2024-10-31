import star from '../../assets/icons/Star.png'


const Otziv = (props) => {
  return (
    <div className="w-[350px] h-[450px] bg-[#ECECEC] rounded-3xl py-[30px] px-6">
      <div className="w-[302px] h-[55px] flex border-b-2 border-[#ACA3A3] items-center justify-between">
        <div className="flex gap-[6px] items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
        <p className='font-semibold text-sm'>{ props.brand.date }</p>
      </div>
      <p className='text-sm font-semibold mt-[19px] mb-[16px] text-[#444141]'>{ props.brand.text }</p>
      <div className="flex flex-col gap-[9px] w-[300px] h-[131px] border-t-2 border-[#ACA3A3] ">
        <div className="mt-4 w-[60px] h-[60px] rounded-full overflow-hidden "><img src={ props.brand.img } alt="" /></div>
        <p className='text-2xl font-bold'>{ props.brand.name }</p>
      </div>
    </div>
  );
};
export default Otziv;
