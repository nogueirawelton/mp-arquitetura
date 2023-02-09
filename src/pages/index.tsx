import { Header } from '@/components/Header';
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

  function handleChangeActivePage(id: number) {
    mainSwiper?.slideTo(id);
  }

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
        handleChangeActivePage={handleChangeActivePage}
      />
      <main>
        <Swiper
          onSwiper={setMainSwiper}
          direction="vertical"
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          pagination
          speed={1000}
          onSlideChange={(swiper) => setActivePageId(swiper.activeIndex)}>
          <SwiperSlide>
            <p>1</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>2</p>
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
