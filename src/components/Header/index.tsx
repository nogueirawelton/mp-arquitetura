import logoImg from '@/assets/logo.svg';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import SwiperType from 'swiper/types/swiper-class';

import menu from '@/menu.json';
import { TextAlignLeft } from 'phosphor-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  activePageId: number;
  mainSwiper: SwiperType | null;
}

export const Header = ({ activePageId, mainSwiper }: HeaderProps) => {
  const isWhite = [0, 2].includes(activePageId);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 840);
  });

  return (
    <header
      className={`${styles.header} ${
        activePageId !== 0 ? styles.scrolled : ''
      }`}>
      <Image
        src={logoImg}
        alt="Logo"
        priority={true}
        width={141}
        height={112}
      />
      <nav>
        {menu.map(({ id, name }) => (
          <button
            key={id}
            className={`${activePageId == id ? styles.active : ''} ${
              isWhite ? styles.white : styles.black
            }`}
            onClick={() => mainSwiper?.slideTo(id)}>
            {name}
          </button>
        ))}
      </nav>
      <button data-menu="open">
        <TextAlignLeft
          size={32}
          color={!isDesktop ?? isWhite ? '#ffffff' : '#222222'}
        />
      </button>
    </header>
  );
};
