import Cabecalho from '../components/cabecalho';
import './inicio.scss';
import imagemSlide1 from '../assets/image.png';
import imagemSlide2 from '../assets/image2.png';
import imagemSlide3 from '../assets/image3.png';
import gotasSangue from '../assets/gotasS.svg';
import coracao from '../assets/heart.svg';
import comunidade from '../assets/people-roof.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Inicio() {
    const data = [
        { id: '1', imagem: imagemSlide1 },
        { id: '2', imagem: imagemSlide2 },
        { id: '3', imagem: imagemSlide3 },  
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
            <div className='Container-section'>
            <div class="linha-vertical">
                <p className='texto-principal'>
                “O Guia do Sangue é um portal informativo que tem como missão <br /> orientar e incentivar pessoas a se tornarem doadoras de sangue. Nosso <br /> propósito é conectar solidariedade e informação, ajudando a salvar <br /> vidas por meio do conhecimento e da empatia.”
                </p>

                <div className='Cartoes'>
                    <div className='cartao'>
                        <img src={gotasSangue} alt="gostas-de-sangue" />
                        <p>Doe sangue para transformar solidariedade em vida.</p>
                    </div>
                    <div className='cartao'>
                        <img src={coracao} alt="coracao" />
                        <p>Determinando solidariedade com amor em cada gota.</p>
                    </div>
                    <div className='cartao'>
                        <img src={comunidade} alt="comunidade" />
                        <p>Doando vida, fortalecendo a comunidade.</p>
                    </div>
                </div>
                <div className="faixa-preta"></div>
            </div>


            </div>
        </div>

        
    );
}