import Otziv from "./otziv"
import user1 from '../../assets/img/user1.jpg'

const Reviews = ()=>{
    const OtzivInfo1 = {
        date: "8 июня, 2024",
        text: "Обратились в компанию для бурения скважины на воду на дачном участке. Остались очень довольны! Бригада приехала вовремя, работали слаженно и профессионально. Скважину пробурили за два дня, как и обещали. Вода чистая и вкусная. Спасибо за оперативность и качественную работу! Рекомендую всем!",
        img: user1 ,
        name: "Николай Орлов",
      
      };
    return(
        <div className="my-container m-auto">
            <section>
                <h2 className=" text-[40px] lg:text-[56px] font-semibold mt-[60px]">НАШИ КЛИЕНТЫ О НАС</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center mt-[45px] gap-[43px] ">
                    <Otziv brand={ OtzivInfo1}/>
                    <Otziv brand={ OtzivInfo1}/>
                    <Otziv brand={ OtzivInfo1}/>
                </div>
            </section>
        </div>
    )
}

export default Reviews