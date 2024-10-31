import Otziv from "./otziv"
import user1 from '../../assets/img/user1.jpg'
import user2 from '../../assets/img/user2.jpg'
import user3 from '../../assets/img/user3.jpg'

const Reviews = ()=>{
    const OtzivInfo1 = {
        date: "8 июня, 2024",
        text: "Обратились в компанию для бурения скважины на воду на дачном участке. Остались очень довольны! Бригада приехала вовремя, работали слаженно и профессионально. Скважину пробурили за два дня, как и обещали. Вода чистая и вкусная. Спасибо за оперативность и качественную работу! Рекомендую всем!",
        img: user1 ,
        name: "Николай Орлов",
      };
      const OtzivInfo2 = {
        date: "9 августа, 2024",
        text: "Обратились в компанию для бурения скважины на загородном участке и остались очень довольны! Бригада прибыла вовремя, работала профессионально. Скважину пробурили за два дня, как и обещали. Вода чистая и вкусная. Спасибо за отличное качество работы! Рекомендую всем и вся!",
        img: user2 ,
        name: "Андерей Куплинов",
      };
      const OtzivInfo3 = {
        date: "2 октября, 2024",
        text: "Обратилась в компанию для бурения скважины на своем загородном участке и осталась очень довольна! Бригада приехала точно в срок и работала профессионально. Скважину пробурили всего за два дня, как и обещали. Вода чистая и вкусная, я в восторге! Огромное спасибо за отличную работу!",
        img: user3 ,
        name: "Дарья Шарапова",
      };
    return(
        <div className="my-container m-auto">
            <section>
                <h2 className=" text-[40px] lg:text-[56px] font-semibold mt-[60px]">НАШИ КЛИЕНТЫ О НАС</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center mt-[45px] gap-[43px] ">
                    <Otziv brand={ OtzivInfo1}/>
                    <Otziv brand={ OtzivInfo2}/>
                    <Otziv brand={ OtzivInfo3}/>
                </div>
            </section>
        </div>
    )
}

export default Reviews