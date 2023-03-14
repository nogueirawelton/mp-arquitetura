import styles from '@/styles/Hero.module.scss';
import { CaretDown } from 'phosphor-react';
import { memo } from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperType from 'swiper/types/swiper-class';
import { ProjectSlide } from './ProjectSlide';

interface HeroProps {
  mainSwiper: SwiperType | null;
}

const projects = [
  {
    id: 1,
    name: 'Casa Moderna',
    description: 'Criada com objetivo de demonstrar a beleza da simplicidade.',
    banner: 'casa-moderna.webp',
  },
  {
    id: 2,
    name: 'Casa Sustentável',
    description:
      'Criada com objetivo de aplicar conceitos de sustentabilidade e exaltar a natureza.',
    banner: 'casa-floresta.webp',
  },
];

const HeroTemplate = ({ mainSwiper }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        pagination={{
          clickable: true,  
        }}
        autoplay={{
          delay: 7000,
        }}>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => mainSwiper?.slideNext()}>
        <CaretDown
          size={42}
          color="#ffffff"
        />
      </button>
    </section>
  );
};

export const Hero = memo(HeroTemplate);
