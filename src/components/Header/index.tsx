import logoImg from '@/assets/logo.svg';
import Image from 'next/image';

import styles from '@/styles/Header.module.scss';

import menu from '@/menu.json';
import { TextAlignLeft } from 'phosphor-react';

interface HeaderProps {
  activePageId: number;
  handleChangeActivePage: (id: number) => void;
}

export const Header = ({
  activePageId,
  handleChangeActivePage,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
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
            className={activePageId == id ? styles.active : ''}
            onClick={() => handleChangeActivePage(id)}>
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
