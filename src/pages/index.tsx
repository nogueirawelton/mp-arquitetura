import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Mousewheel } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperType from 'swiper/types/swiper-class';

export default function Home() {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activePageId, setActivePageId] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const isWhite = [0, 2].includes(activePageId);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  });

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
          modules={[Mousewheel]}
          speed={1000}
          onSlideChange={(swiper) => setActivePageId(swiper.activeIndex)}>
          <SwiperSlide>
            <Hero mainSwiper={mainSwiper} />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
