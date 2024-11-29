import { Navigation, Pagination, Scrollbar, A11y, Autoplay,  } from 'swiper/modules';
import sportshoes from '../../assets/sport-shoes.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.scss'
import 'swiper/css';

export default function Carrosel_Header () {
    return (

      <div className="carrosel">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000}}
        navigation
        loop

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('Passou pai em ')}
      >
       
        <SwiperSlide><div className="swiper-slide-content"><span>TÊNIS DE CORRIDA</span> Encontre o seu tênis ideal.<a href="">Saiba Mais</a></div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide-content"><span>Black Friday</span>Produtos com até 70% OFF<a href="">Saiba Mais</a></div></SwiperSlide>
        <SwiperSlide><div className="swiper-slide-content"><span>CARTÃO PRESENTE</span>para presentes de última hora<a href="">Saiba Mais</a></div></SwiperSlide>
       
    
     
      </Swiper>

      </div>
    );

}