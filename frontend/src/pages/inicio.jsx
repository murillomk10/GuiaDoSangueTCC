import Cabecalho from '../components/cabecalho';
import './inicio.scss';
import imagemSlide1 from '../assets/image.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Inicio() {
    const data = [
        { id: '1', imagem: imagemSlide1 },
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
                        <div style={{ position: 'relative' }}>
                            <img
                                src={item.imagem}
                                alt="slider"
                                className="slide-item"
                            />
                            <div className="slide-buttons">
                                <button className="btn-doacao">AGENDE SUA DOAÇÃO</button>
                                <button className="btn-doacao">SAIBA COMO DOAR</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}