import Cabecalho from '../components/cabecalho';
import './inicio.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Inicio() {
    const data = [
        { id: '1', imagem: '' },
        { id: '2', imagem: 'https://swiperjs.com/demos/images/nature-2.jpg' },
        { id: '3', imagem: 'https://swiperjs.com/demos/images/nature-3.jpg' },
        { id: '4', imagem: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    ];

    return (
        <div className="Conatainer">
            <Cabecalho />

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.imagem}
                            alt="slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="conteudo">
                <h2>Bem-vindo ao nosso site!</h2>
            </div>
    );
}