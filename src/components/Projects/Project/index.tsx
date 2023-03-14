import styles from '@/styles/Project.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';

export const Project = () => {
  return (
    <div className={styles.project}>
      <Image
        src="/assets/img/casa-moderna.webp"
        alt="Casa Moderna"
        width={450}
        height={465}
      />
      <Link
        className={styles.hover}
        href="">
        <div>
          <div>
            <h3>Casa Moderna</h3>
            <p>Criada com objetivo de demonstrar a beleza da simplicidade.</p>
          </div>
          <span>
            <ArrowRight size={32} />
          </span>
        </div>
      </Link>
    </div>
  );
};
