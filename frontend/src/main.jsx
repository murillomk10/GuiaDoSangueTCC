import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegacao from './routes'
import 'swiper/css/navigation';    
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { register } from 'swiper/element/bundle';
register();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
