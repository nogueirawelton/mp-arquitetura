import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectSlide } from './ProjectSlide';

import styles from '@/styles/Hero.module.scss';
import { CaretDown } from 'phosphor-react';
import { memo } from 'react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import SwiperType from 'swiper/types/swiper-class';

interface HeroProps {
  mainSwiper: SwiperType | null;
}

const projects = [
  {
    id: 1,
    name: 'Casa Moderna',
    description: 'Criada com objetivo de demonstrar a beleza da simplicidade.',
    banner: 'casa-moderna',
  },
  {
    id: 2,
    name: 'Casa Sustentável',
    description:
      'Criada com objetivo de aplicar conceitos de sustentabilidade e exaltar a natureza.',
    banner: 'casa-floresta',
  },
];

const HeroTemplate = ({ mainSwiper }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
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
