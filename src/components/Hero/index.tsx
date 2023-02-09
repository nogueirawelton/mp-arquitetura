import { Swiper, SwiperSlide } from 'swiper/react';
import { ProjectSlide } from './ProjectSlide';

import chevronDown from '@/assets/chevron-down.svg';
import Image from 'next/image';
import 'swiper/css/effect-fade';

import styles from '@/styles/hero.module.scss';
import { memo } from 'react';

interface HeroProps {
  handleNextPage: () => void;
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
const HeroTemplate = ({ handleNextPage }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <Swiper>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectSlide project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleNextPage}>
        <Image
          src={chevronDown}
          alt=""
        />
      </button>
    </section>
  );
};

export const Hero = memo(HeroTemplate);
