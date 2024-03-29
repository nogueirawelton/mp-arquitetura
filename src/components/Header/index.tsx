import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import SwiperType from 'swiper/types/swiper-class';

import menu from '@/menu.json';
import { TextAlignLeft, X } from 'phosphor-react';
import { useState } from 'react';

interface HeaderProps {
  activePageId: number;
  mainSwiper: SwiperType | null;
}

export const Header = ({ activePageId, mainSwiper }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobileWhite = [0, 1, 2].includes(activePageId);
  const isDesktopWhite = [0, 2].includes(activePageId);

  return (
    <header
      className={`${styles.header} ${
        activePageId !== 0 ? styles.scrolled : ''
      }`}>
      <Image
        src="/assets/img/logo.svg"
        alt="Logo"
        priority={true}
        width={100}
        height={96}
      />
      <nav className={isMobileMenuOpen ? styles.show : ''}>
        <button
          data-menu="close"
          onClick={() => setIsMobileMenuOpen(false)}>
          <X
            size={32}
            color="#ffffff"
          />
        </button>
        {menu.map(({ id, name }) => (
          <button
            key={id}
            className={`${activePageId == id ? styles.active : ''} ${
              isDesktopWhite ? styles.white : styles.black
            }`}
            onClick={() => {
              mainSwiper?.slideTo(id);
              setIsMobileMenuOpen(false);
            }}>
            {name}
          </button>
        ))}
      </nav>
      <button
        data-menu="open"
        onClick={() => setIsMobileMenuOpen(true)}>
        <TextAlignLeft
          size={32}
          color={isMobileWhite ? '#ffffff' : '#222222'}
        />
      </button>
    </header>
  );
};
