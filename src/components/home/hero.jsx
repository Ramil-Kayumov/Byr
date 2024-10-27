

const Hero =()=>{
    return(
    <section>
      <div className="bg-[url('./assets/img/hero.png')] w-full h-[546px] bg-no-repeat bg-cover bg-bottom pt-[96px]">
        <div className="my-container flex gap-5">
          <div className="w-[71px] h-[351px] border-[#F7A539] border-s-4 border-y-4 rounded-lg mt-1"></div>
          <div className="flex flex-col text-white w-[643px] font-bold">
            <p className=" mb-3">
              Инженерные изыскания и комплексное сопровождение!
            </p>
            <h2 className=" text-[55px] leading-[50px] mb-2">
              БУРОВЫЕ РАБОТЫ <br />
              <span className="text-[40px]">
                С <span className="text-[#F7A539]">ГАРАНТИЕЙ</span> РЕЗУЛЬТАТА
              </span>
            </h2>
            <p className="text-[#D9D9D9] mb-3">
              Мы - команда профессионалов с многолетним опытом в сфере буровых
              работ. Предлагаем широкий спектр услуг: от бурения скважин на воду
              до инженерно-геологических изысканий. Современное оборудование и
              индивидуальный подход к каждому клиенту - гарантия безупречного
              результата.
            </p>
            <button className="bg-[#F7A539] h-[74px] w-[458px] rounded-3xl text-2xl">Заказать консультацию</button>
          </div>
        </div>
      </div>

    </section>
    )
}

export default Hero