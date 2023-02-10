import logoImg from '@/assets/logo.svg';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import SwiperType from 'swiper/types/swiper-class';

import menu from '@/menu.json';
import { TextAlignLeft } from 'phosphor-react';

interface HeaderProps {
  activePageId: number;
  mainSwiper: SwiperType | null;
}

export const Header = ({ activePageId, mainSwiper }: HeaderProps) => {
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
              [0, 2].includes(activePageId) ? styles.white : styles.black
            }`}
            onClick={() => mainSwiper?.slideTo(id)}>
            {name}
          </button>
        ))}
      </nav>
      <button data-menu="open">
        <TextAlignLeft
          size={32}
          color="#ffffff"
        />
      </button>
    </header>
  );
};
