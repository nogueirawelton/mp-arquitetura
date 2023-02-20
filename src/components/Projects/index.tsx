import styles from '@/styles/Projects.module.scss';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from './Project';

export const Projects = () => {
  const [chunkLimitter, setChunkLimitter] = useState(2);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setChunkLimitter(4);
    } else if (window.innerWidth >= 600) {
      setChunkLimitter(1);
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
          <button className={styles.active}>Pessoais</button>
          <button>Acadêmicos</button>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <Swiper>
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
      </div>
    </section>
  );
};
