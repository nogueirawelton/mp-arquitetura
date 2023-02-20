import styles from '@/styles/Projects.module.scss';
import Link from 'next/link';
import { BookOpen, InstagramLogo, LinkedinLogo, User } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from './Project';

export const Projects = () => {
  const [chunkLimitter, setChunkLimitter] = useState(1);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setChunkLimitter(4);
    }
  });

  const chunks = Array.from(Array(10).keys()).reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkLimitter);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, [] as any);

  return (
    <section className={styles.projects}>
      <div className={styles.projectsControls}>
        <header>
          <h2>Meus Projetos</h2>
        </header>
        <div>
          <button className={styles.active}>
            <User
              size={20}
              weight="bold"
              color="#222222"
            />
            Pessoais
          </button>
          <button>
            <BookOpen
              size={20}
              weight="bold"
            />
            Acadêmicos
          </button>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <Swiper
          spaceBetween={32}
          breakpoints={{
            650: {
              slidesPerView: 2,
            },
          }}
          style={{
            height: 'calc(100% - 61px - 2rem);',
          }}>
          {chunks.map((chunk: any) => {
            return (
              <SwiperSlide>
                <div className={styles.wrapper}>
                  {chunk.map((slide: any) => (
                    <Project />
                  ))}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <small>Arraste para ver mais.</small>
        <div className={styles.social}>
          <Link href="#">
            <LinkedinLogo
              color="#ffffff"
              size={24}
            />
          </Link>
          <Link href="#">
            <InstagramLogo
              color="#ffffff"
              size={24}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
