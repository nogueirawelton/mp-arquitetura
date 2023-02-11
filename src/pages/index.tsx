import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import { useState } from 'react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperType from 'swiper/types/swiper-class';

export default function Home() {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activePageId, setActivePageId] = useState(0);

  const isWhite = [0, 2].includes(activePageId);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Portfólio | Mariana de Paula</title>
      </Head>
      <Header
        activePageId={activePageId}
        mainSwiper={mainSwiper}
      />
      <main
        className={`${styles.main} ${isWhite ? styles.white : styles.black}`}>
        <Swiper
          onSwiper={setMainSwiper}
          direction="vertical"
          mousewheel
          modules={[Mousewheel, Pagination]}
          pagination
          speed={1000}
          onSlideChange={(swiper) => setActivePageId(swiper.activeIndex)}>
          <SwiperSlide>
            <Hero mainSwiper={mainSwiper} />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <p>3</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>4</p>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
