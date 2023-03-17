import styles from '@/styles/Projects.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  CaretLeft,
  CaretRight,
  InstagramLogo,
  LinkedinLogo,
  User,
} from 'phosphor-react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Project } from './Project';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsControls}>
        <header>
          <h2>Meus Projetos</h2>
        </header>
        <div className={styles.controls}>
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
        <Image
          src="/assets/ornament/projects-leaf.svg"
          alt="Leaf"
          width={600}
          height={600}
        />
        <div className={styles.social}>
          <Link href="#">
            <LinkedinLogo
              color="#222222"
              size={24}
            />
          </Link>
          <Link href="#">
            <InstagramLogo
              color="#222222"
              size={24}
            />
          </Link>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <Swiper
          className={styles.projectsSwiper}
          spaceBetween={32}
          allowTouchMove={false}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
          breakpoints={{
            876: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 1,
            },
            1440: {
              slidesPerView: 2,
            },
          }}>
          <button className={`${styles.prev} prev`}>
            <CaretLeft
              size={48}
              color="#ffffff"
            />
          </button>
          {Array.from(Array(10).keys()).map((chunk: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Project />
              </SwiperSlide>
            );
          })}
          <button className={`${styles.next} next`}>
            <CaretRight
              size={48}
              color="#ffffff"
            />
          </button>
        </Swiper>
      </div>
    </section>
  );
};
